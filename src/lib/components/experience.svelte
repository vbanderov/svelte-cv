<script>
	import config from '$lib/config';
</script>

<div class="dark:text-white">
	<div class="text-bold mt-4 mb-2 text-xl font-bold uppercase text-blue-700 dark:text-orange-300">
		Experience
	</div>

	<div class="ml-2 space-y-2  ">
		{#each config.experience as job}
			<div>
				<div class="ml-[-4px] text-lg font-bold ">{job.employer.title}</div>
				<div class=" space-y-2 border-l-2 border-gray-300  pl-2">
					{#each job.positions as position}
						<div class="ml-2">
							<div class="flex flex-row items-center">
								<span
									class="absolute inline-block h-4 w-4 -translate-x-[25px] rounded-full border-4 border-white bg-gray-500 dark:border-slate-900"
								/>
								<div class="text-lg font-bold text-blue-700 dark:text-orange-300">
									{position.title}
								</div>
							</div>
							<div class="font-bold">{position.startDate} - {position.endDate}</div>
							<div class="ml-2 space-y-2">
								<ul class="list-inside list-disc">
									{#each position.bulletPoints as point}
										<li><span class="ml-[-8px]">{point}</span></li>
									{/each}
								</ul>

								<div><span class="font-bold">Skills:</span> {position.technologies.join(', ')}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
