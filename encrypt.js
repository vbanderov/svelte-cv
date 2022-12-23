import CryptoJS from 'crypto-js';
import { promises as fs } from 'fs';
import * as Readline from 'node:readline/promises';

const secretsFile = 'src/lib/secrets.ts';
const testString = 'test-string';

const readline = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: true
});

async function main() {
	const phone = await readline.question('Enter phone number to encrypt: ');
	const email = await readline.question('Enter email to encrypt: ');
	const password = await readline.question('Enter password: ');

	const iv = CryptoJS.lib.WordArray.random(128 / 8);
	const salt = CryptoJS.lib.WordArray.random(128 / 8);
	const key = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32 });

	const config = {
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC,
		hasher: CryptoJS.algo.SHA256,
		iv
	};

	const encryptedTestString = CryptoJS.AES.encrypt(testString, key, config).toString();
	const encryptedPhone = CryptoJS.AES.encrypt(phone, key, config).toString();
	const encryptedEmail = CryptoJS.AES.encrypt(email, key, config).toString();

	const fileContent = `
        export const testString = '${testString}';
        export const testStringEncrypted = '${encryptedTestString}';
        export const phoneEncrypted = '${encryptedPhone}';
        export const emailEncrypted = '${encryptedEmail}';
        export const salt = '${salt}';
        export const iv = '${iv}';
    `;

	await fs.writeFile(secretsFile, fileContent);

	console.log(`Encrypted data written to ${secretsFile}`);

	readline.close();
}

main();
