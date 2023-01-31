<script lang="ts">
	import config from '$lib/config';
	import Section from '$lib/components/section.svelte';
	import { formatDate, formatPositionPeriod, getDuration } from '$lib/helpers';
</script>

<Section title="Experience">
	<div class="ml-2 space-y-4">
		{#each config.experience as job}
			<div class="break-inside-avoid">
				<a href={job.employer.url} target="_blank" rel="noreferrer">
					<div class="ml-[-4px] text-xl font-bold">{job.employer.title}</div>
				</a>

				<div class=" border-l-2 border-gray-300 pl-2">
					<div class="pb-1">{getDuration(job)} | {job.employer.location}</div>

					<div class="space-y-4">
						{#each job.positions as position}
							<div class="ml-2 break-inside-avoid">
								<div class="flex flex-row items-center">
									<span
										class="absolute inline-block h-4 w-4 -translate-x-[25px] rounded-full border-4 border-white bg-blue-800 dark:border-slate-900 dark:bg-orange-300"
									/>
									<div class="text-lg font-bold text-blue-800 dark:text-orange-300">
										{position.title}
									</div>
								</div>
								<div class="font-bold">
									{formatPositionPeriod(position)}
								</div>
								<div class="ml-2 space-y-2">
									<ul class="list-inside list-disc">
										{#each position.bulletPoints as point}
											<li><span class="ml-[-8px]">{point}</span></li>
										{/each}
									</ul>

									<div>
										<span class="font-bold">Skills:</span>
										{position.technologies.join(', ')}
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
