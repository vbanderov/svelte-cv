import AES from 'crypto-js/aes';
import {
	phoneEncrypted,
	emailEncrypted,
	testStringEncrypted,
	testString,
	salt,
	iv
} from '$lib/secrets';
import Utf8 from 'crypto-js/enc-utf8';
import CryptoJS from 'crypto-js';

interface ContactInfo {
	phone: string;
	email: string;
}

const config = {
	padding: CryptoJS.pad.Pkcs7,
	mode: CryptoJS.mode.CBC,
	iv: CryptoJS.enc.Hex.parse(iv)
};

export function decryptContactInfo(password?: string): ContactInfo | undefined {
	if (!password) return;

	const key = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(salt), { keySize: 256 / 32 });

	const passwordIsInvalid =
		AES.decrypt(testStringEncrypted, key, config).toString(Utf8) !== testString;

	if (passwordIsInvalid) return;

	return {
		phone: AES.decrypt(phoneEncrypted, key, config).toString(Utf8),
		email: AES.decrypt(emailEncrypted, key, config).toString(Utf8)
	};
}
