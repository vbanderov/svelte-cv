<script>
	import DownloadIcon from '$lib/assets/download.svg';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showDownloadButton = false;

	onMount(() => (showDownloadButton = true));
</script>

{#if showDownloadButton}
	<a rel="external" href="/svelte-cv/CV-Banderov.pdf" download title="Download PDF">
		<div
			transition:fly={{ y: 200, duration: 2000 }}
			class="fixed bottom-14 right-14 rounded-full bg-slate-500 p-2 shadow-xl shadow-black/60  hover:bg-sky-700 dark:bg-white print:hidden"
		>
			<img src={DownloadIcon} alt="Download Icon" />
		</div>
	</a>
{/if}
