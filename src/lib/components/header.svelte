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
	} from '$lib/secrets';
	import Utf8 from 'crypto-js/enc-utf8';
	import CryptoJS from 'crypto-js';
	import { onMount } from 'svelte';
	import PhoneIcon from '$lib/assets/device-mobile.svg';
	import MailIcon from '$lib/assets/mail.svg';
	import LocationIcon from '$lib/assets/location.svg';
	import config from '$lib/config';

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

<div
	class="flex w-full flex-col items-center justify-center space-x-4 space-y-4 dark:text-white md:flex-row"
>
	<div class="w-32">
		<img src={avatar} class="rounded-full" alt="avatar" />
	</div>
	<div
		class="flex-1 flex-col items-stretch text-center text-blue-700 dark:text-orange-300 md:text-left"
	>
		<div class="whitespace-nowrap text-3xl font-semibold tracking-wider">{config.name}</div>
		<div class="text-base">
			{config.tagLine}
		</div>
	</div>

	<div
		class="flex flex-row flex-wrap justify-evenly space-x-2 text-sm md:flex-col md:justify-start md:space-x-0 md:space-y-2"
	>
		{#if emailDecrypted}
			<div class="flex flex-row items-center space-x-1">
				<img src={MailIcon} alt="Email icon" class="max-w-4 max-h-4 dark:hidden" />

				<div>
					<a href="mailto:{emailDecrypted}">{emailDecrypted}</a>
				</div>
			</div>
		{/if}

		{#if phoneDecrypted}
			<div class="flex flex-row items-center space-x-1">
				<img src={PhoneIcon} alt="Phone icon" class="max-w-4 max-h-4  dark:hidden" />
				<div>
					<a href="tel:{phoneDecrypted}">{phoneDecrypted}</a>
				</div>
			</div>
		{/if}

		<div class="flex flex-row items-center space-x-1">
			<img src={LocationIcon} alt="Location icon" class="max-w-4 max-h-4  dark:hidden" />
			<div>Calgary, AB</div>
		</div>
	</div>
</div>
