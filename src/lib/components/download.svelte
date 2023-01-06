<script>
	import DownloadIcon from '$lib/assets/download.svg';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { iv, salt, testString, testStringEncrypted } from '$lib/secrets';
	import { AES } from 'crypto-js';
	import Utf8 from 'crypto-js/enc-utf8';
	import CryptoJS from 'crypto-js';

	let showDownloadButton = false;
	let filename = '';
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

		showDownloadButton = true;
		filename = `/svelte-cv/${s}.pdf`;
	});
</script>

{#if showDownloadButton}
	<a rel="external" href={filename} download="CV-Banderov.pdf" title="Download PDF">
		<div
			transition:fly={{ y: 200, duration: 2000 }}
			class="fixed bottom-14 right-14 rounded-full bg-slate-500 p-2 shadow-xl shadow-black/60  hover:bg-sky-700 dark:bg-white print:hidden"
		>
			<img src={DownloadIcon} alt="Download Icon" />
		</div>
	</a>
{/if}
