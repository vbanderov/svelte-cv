<script lang="ts">
	export let title: string;
</script>

<div class="pt-2 dark:text-white">
	<div
		class="text-bold mt-4 mb-2 border-b-2 border-dotted border-blue-600 pb-1 text-xl font-bold uppercase text-blue-800 dark:border-orange-300 dark:text-orange-300"
	>
		{title}
	</div>

	<slot />
</div>
