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
import type { Job, Position } from '$lib/config';

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

export function formatPositionPeriod(position: Position): string {
	const { startDate, endDate } = position;
	const start = formatDate(...startDate);
	const end = endDate ? formatDate(...endDate) : 'Present';

	return `${start} - ${end}`;
}

export function formatDate(year: number, month: number): string {
	const date = new Date(Date.UTC(year, month));
	return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
}

export function getDuration(job: Job): string {
	const { startDate } = job.positions.slice(-1)[0];
	const endDate = job.positions[0].endDate;

	const endDateOrNow = endDate || [new Date().getFullYear(), new Date().getMonth() + 1];
	const durationMs = Date.UTC(endDateOrNow[0], endDateOrNow[1] + 1) - Date.UTC(...startDate);
	const duration = new Date(durationMs);

	const years = duration.getUTCFullYear() - 1970;
	const months = duration.getUTCMonth();

	const yearsString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
	const monthsString = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

	return [yearsString, monthsString].filter((s) => s != '').join(', ');
}
