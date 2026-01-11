<script>
	import Section from '$lib/components/section.svelte';
	import config, { resolveValue } from '$lib/config';
</script>

<Section title="Expertise">
	<ul class="list-inside list-disc pl-2">
		{#each resolveValue(config.expertise) as expertise}
			<li><span class="ml-[-8px]">{expertise}</span></li>
		{/each}
	</ul>
</Section>
