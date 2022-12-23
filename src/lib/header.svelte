<script>
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
	let phoneDecrypted = '';
	let emailDecrypted = '';

	onMount(() => {
		const s = window.location.hash.slice(1);
		const config = {
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC,
			iv: CryptoJS.enc.Hex.parse(iv)
		};
		const key = CryptoJS.PBKDF2(s, CryptoJS.enc.Hex.parse(salt), { keySize: 256 / 32 });

		if (!s || AES.decrypt(testStringEncrypted, key, config).toString(Utf8) !== testString) {
			return;
		}

		phoneDecrypted = AES.decrypt(phoneEncrypted, key, config).toString(Utf8);
		emailDecrypted = AES.decrypt(emailEncrypted, key, config).toString(Utf8);
	});
</script>

<div class="flex w-full flex-row items-center space-x-4">
	<div class="w-32">
		<img src={avatar} class="rounded-full" alt="avatar" />
	</div>
	<div class="flex-1 flex-col items-stretch">
		<div class="text-2xl dark:text-white">Vladimir Banderov</div>
		<div class="text-lg dark:text-white">
			Senior Full Stack Engineer with impressive infrastructure experience and proven leadership
			skills.
		</div>
		<div>{phoneDecrypted}</div>
		<div>{emailDecrypted}</div>
	</div>
</div>
