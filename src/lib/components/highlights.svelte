<script>
	import Section from '$lib/components/section.svelte';
	import config from '$lib/config';
</script>

<Section title="Highlights">
	<ul class="list-inside list-disc pl-2">
		{#each config.highlights as highlight}
			<li><span class="ml-[-8px]">{highlight}</span></li>
		{/each}
	</ul>
</Section>
