<script lang="ts">
	import Experience from '$lib/components/experience.svelte';
	import Header from '$lib//components/header.svelte';
	import Download from '$lib/components/download.svelte';
	import Education from '$lib/components/education.svelte';
	import Expertise from '$lib/components/expertise.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="flex min-h-screen flex-col items-center bg-slate-200 dark:bg-slate-800 page:p-6">
	<div
		class="h-full w-full max-w-4xl flex-1 bg-white p-4 shadow-lg shadow-black/10 dark:bg-slate-900 dark:shadow-2xl dark:shadow-black/80 md:p-9 lg:flex-grow-0 print:flex-1 print:p-0 print:shadow-none"
	>
		<Header />

		<Expertise />

		<Education />

		<Experience />
	</div>
</main>

<Download />
