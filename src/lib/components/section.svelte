<script lang="ts">
	export let title: string;
	
	// Map display titles to ATS-standard section headings for print
	const atsHeadings: Record<string, string> = {
		'Expertise': 'Summary',
		'Experience': 'Experience', 
		'Education': 'Education'
	};
	
	$: printTitle = atsHeadings[title] || title;
</script>

<div class="pt-2 dark:text-white print:pt-1">
	<!-- Browser view: decorative heading -->
	<div
		class="text-bold mt-4 mb-2 border-b-2 border-dotted border-blue-600 pb-1 text-xl font-bold uppercase text-blue-800 dark:border-orange-300 dark:text-orange-300 print:hidden"
	>
		{title}
	</div>
	
	<!-- Print view: ATS-standard plain heading -->
	<div class="hidden print:block mt-2 mb-1 text-sm font-bold uppercase break-after-avoid">
		{printTitle}
	</div>

	<slot />
</div>
