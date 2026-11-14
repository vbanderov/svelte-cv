<script lang="ts">
	import config, { resolveValue } from '$lib/config';
	import Section from '$lib/components/section.svelte';
	import { formatDate, formatPositionPeriod, getDuration } from '$lib/helpers';
</script>

<Section title="Experience">
	<div class="ml-2 space-y-4 print:ml-0 print:space-y-3">
		{#each config.experience as job}
			<div>
				<!-- Browser view: clickable link -->
				<a href={job.employer.url} target="_blank" rel="noreferrer" class="print:hidden">
					<div class="ml-[-4px] text-xl font-bold break-after-avoid">{job.employer.title}</div>
				</a>
				<!-- Print view: plain text employer name -->
				<div class="hidden print:block text-base font-bold break-after-avoid">{job.employer.title}</div>

				<!-- Browser view: decorative timeline -->
				<div class="border-l-2 border-gray-300 pl-2 print:border-0 print:pl-0">
					<div class="pb-1 break-after-avoid print:text-sm">{getDuration(job)} | {job.employer.location}</div>

					<div class="space-y-4 print:space-y-2">
						{#each job.positions as position}
							<div class="ml-2 print:ml-0">
								<div class="flex flex-row items-center break-after-avoid">
									<!-- Browser view: timeline dot -->
									<span
										class="absolute inline-block h-4 w-4 -translate-x-[25px] rounded-full border-4 border-white bg-blue-800 dark:border-slate-900 dark:bg-orange-300 print:hidden"
									/>
									<div class="text-lg font-bold text-blue-800 dark:text-orange-300 print:text-black print:text-base">
										{position.title}
									</div>
								</div>
								<div class="font-bold break-after-avoid print:text-sm print:font-normal">
									{formatPositionPeriod(position)}
								</div>
								<div class="ml-2 space-y-2 print:ml-0 print:space-y-1">
									<ul class="list-inside list-disc print:list-outside print:ml-4">
										{#each resolveValue(position.bulletPoints) as point}
											<li class="print:text-sm"><span class="ml-[-8px] print:ml-0">{@html point.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</span></li>
										{/each}
									</ul>

									<div class="print:text-sm">
										<span class="font-bold">Skills:</span>
										{resolveValue(position.technologies).join(', ')}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
