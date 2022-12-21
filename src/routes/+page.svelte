<script lang="ts">
	import Experience from '$lib/experience.svelte';
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="flex min-h-screen flex-col items-center bg-gray-200 dark:bg-slate-900 lg:p-2">
	<div
		class="h-full w-full max-w-5xl flex-1 bg-white p-4 shadow-lg shadow-black/10 dark:bg-slate-700 dark:shadow-white/20 lg:flex-grow-0 print:flex-1"
	>
		<Header />

		<Experience />
	</div>

	<a rel="external" href="/svelte-cv/CV-Banderov.pdf" target="blank">
		<div
			class="fixed bottom-3 right-14 rounded-md bg-slate-700 p-2 text-blue-500 hover:bg-sky-700 dark:bg-white print:hidden"
		>
			Download PDF
		</div>
	</a>
</main>
