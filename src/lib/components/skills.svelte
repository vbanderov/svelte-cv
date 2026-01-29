<script lang="ts">
	import config from '$lib/config';
</script>

<!-- ATS-friendly Skills section - shown only in print -->
<div class="hidden print:block mt-3">
	<div class="font-bold uppercase text-sm">Skills / Technologies</div>
	<div class="mt-1 text-sm">
		{config.skills.join(', ')}
	</div>
</div>
