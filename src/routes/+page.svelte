<script lang="ts">
	import Experience from '$lib/experience.svelte';
	import Header from '$lib/header.svelte';
</script>

<main class="flex h-screen flex-col items-center bg-gray-200 p-2 dark:bg-slate-900 print:p-0">
	<div
		class="max-w-7xl bg-white p-4 shadow-lg shadow-black/10 dark:bg-slate-700 dark:shadow-white/20"
	>
		<Header />

		<Experience />
	</div>
</main>
