<script>
	import Section from '$lib/components/section.svelte';
	import config, { resolveValue } from '$lib/config';
</script>

<Section title="Expertise">
	<!-- Browser view -->
	<ul class="list-inside list-disc pl-2 print:hidden">
		{#each resolveValue(config.expertise) as expertise}
			<li><span class="ml-[-8px]">{@html expertise.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</span></li>
		{/each}
	</ul>
	
	<!-- Print view: ATS-friendly format with tagLine intro -->
	<div class="hidden print:block text-sm break-inside-avoid">
		<p class="mb-2">{@html resolveValue(config.tagLine).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>
		<ul class="list-outside list-disc ml-4">
			{#each resolveValue(config.expertise) as expertise}
				<li>{@html expertise.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>
			{/each}
		</ul>
	</div>
</Section>
