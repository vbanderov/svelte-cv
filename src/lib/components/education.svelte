<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import config from '$lib/config';
</script>

<Section title="Education">
	<div class="pl-4 text-lg">Master, Information Technologies</div>
	<div class="pl-6 text-base font-bold">
		2005-2010 - National Research Nuclear University MEPhI (Moscow Engineering Physics Institute)
	</div>
	<div class="ml-2 space-y-2 pl-6">
		<ul class="list-inside list-disc">
			<li>
				<span class="ml-[-8px]">
					Focused on algorithms, machine learning foundations, system design, architecture,
					optimization, and complex problem-solving, providing a foundation for scalable tech
					solutions.</span
				>
			</li>
		</ul>
	</div>
	<div class="mt-4 ml-4">
		<span class="font-bold">Certifications:</span>
		{#each config.certifications as cert}
			{cert};&nbsp;
		{/each}
	</div>
</Section>
