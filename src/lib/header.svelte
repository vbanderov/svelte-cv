<script lang="ts">
	import avatar from '$lib/assets/avatar.jpeg';
	import AES from 'crypto-js/aes';
	import {
		phoneEncrypted,
		emailEncrypted,
		testStringEncrypted,
		testString,
		salt,
		iv
	} from './secrets';
	import Utf8 from 'crypto-js/enc-utf8';
	import CryptoJS from 'crypto-js';
	import { onMount } from 'svelte';
	import PhoneIcon from '$lib/assets/device-mobile.svg';
	import MailIcon from '$lib/assets/mail.svg';

	let phoneDecrypted = '';
	let emailDecrypted = '';
	let password: string | undefined;

	password = import.meta.env['VITE_ENCRYPTION_PASSWORD'];

	onMount(() => {
		password = password ?? window.location.hash.slice(1);
		const config = {
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC,
			iv: CryptoJS.enc.Hex.parse(iv)
		};
		const key = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(salt), { keySize: 256 / 32 });

		if (!password || AES.decrypt(testStringEncrypted, key, config).toString(Utf8) !== testString) {
			return;
		}

		phoneDecrypted = AES.decrypt(phoneEncrypted, key, config).toString(Utf8);
		emailDecrypted = AES.decrypt(emailEncrypted, key, config).toString(Utf8);
	});
</script>

<div class="flex w-full flex-row items-center space-x-4 dark:text-white">
	<div class="w-32">
		<img src={avatar} class="rounded-full" alt="avatar" />
	</div>
	<div class="flex-1 flex-col items-stretch">
		<div class="text-2xl ">Vladimir Banderov</div>
		<div class="text-lg ">
			Senior Full Stack Engineer with impressive infrastructure experience and proven leadership
			skills.
		</div>

		<div class="mt-4 flex flex-row items-center justify-start space-x-4 text-base font-bold">
			{#if emailDecrypted}
				<div class="flex flex-row space-x-2">
					<img src={MailIcon} alt="Email icon" />
					<div>
						<a href="mailto:{emailDecrypted}">{emailDecrypted}</a>
					</div>
				</div>
			{/if}

			{#if phoneDecrypted}
				<div class="flex flex-row space-x-1">
					<img src={PhoneIcon} alt="Phone icon" />
					<div>
						<a href="tel:{phoneDecrypted}">{phoneDecrypted}</a>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
