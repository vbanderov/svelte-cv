<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import config from '$lib/config';
</script>

<Section title="Education">
	<!-- Browser view -->
	<div class="print:hidden">
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
	</div>
	
	<!-- Print view: ATS-friendly format -->
	<div class="hidden print:block text-sm">
		<div class="font-bold">Master, Information Technologies</div>
		<div>National Research Nuclear University MEPhI (Moscow Engineering Physics Institute) | 2005-2010</div>
		<ul class="list-outside list-disc ml-4 mt-1">
			<li>
				Focused on algorithms, machine learning foundations, system design, architecture,
				optimization, and complex problem-solving.
			</li>
		</ul>
	</div>
</Section>

<!-- Print view: Separate Certifications section for ATS -->
<div class="hidden print:block mt-2">
	<div class="font-bold uppercase text-sm">Certifications</div>
	<div class="text-sm mt-1">
		{config.certifications.join('; ')}
	</div>
</div>
