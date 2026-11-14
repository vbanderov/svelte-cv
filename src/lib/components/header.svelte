<script lang="ts">
	import avatar from '$lib/assets/avatar.jpeg';

	import { onMount } from 'svelte';
	import PhoneIcon from '$lib/assets/phone.svg';
	import MailIcon from '$lib/assets/mail.svg';
	import LocationIcon from '$lib/assets/location.svg';
	import LinkedInIcon from '$lib/assets/linkedin.svg';
	import config, { resolveValue } from '$lib/config';
	import { decryptContactInfo } from '$lib/helpers';

	let phone = '';
	let email = '';
	let password: string | undefined;

	// obatain password during SSG for PDF generation
	password = import.meta.env['VITE_ENCRYPTION_PASSWORD'];

	onMount(() => {
		// obtain password during runtime
		password = password ?? window.location.hash.slice(1);

		const contactInfo = decryptContactInfo(password);

		if (!contactInfo) return;

		phone = contactInfo.phone;
		email = contactInfo.email;
	});
</script>

<!-- ATS-friendly print header: plain text, single line contact info -->
<div class="hidden print:block pb-3">
	<div class="text-center text-2xl font-bold">{config.name}</div>
	<div class="text-center text-sm py-2 border-b border-gray-300">
		Calgary, AB
		{#if phone} | {phone}{/if}
		{#if email} | <a href="mailto:{email}">{email}</a>{/if}
		| <a href="https://www.linkedin.com/in/vladimir-banderov/">linkedin.com/in/vladimir-banderov</a>
	</div>
</div>

<!-- Browser view header: visual layout with icons -->
<div
	class="flex w-full flex-col items-center justify-center space-x-4 space-y-4 dark:text-white md:flex-row print:hidden"
>
	<div class="w-32">
		<img src={avatar} class="rounded-full" alt="avatar" />
	</div>
	<div
		class="flex-1 flex-col items-stretch text-center text-blue-800 dark:text-orange-300 md:text-left"
	>
		<div class="whitespace-nowrap text-3xl font-semibold tracking-wider">{config.name}</div>
		<div class="text-base">
			{@html resolveValue(config.tagLine).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}
		</div>
	</div>

	<div
		class="flex flex-row flex-wrap justify-evenly space-x-3 text-sm md:flex-col md:justify-start md:space-x-0 md:space-y-2"
	>
		{#if email}
			<a href="mailto:{email}">
				<div class="flex flex-row items-center space-x-1">
					<img src={MailIcon} alt="Email icon" class="h-5 w-5 md:h-4 md:w-4" />

					<div class="hidden md:block">
						{email}
					</div>
				</div></a
			>
		{/if}

		{#if phone}<a href="tel:{phone}">
				<div class="flex flex-row items-center space-x-1">
					<img src={PhoneIcon} alt="Phone icon" class="h-5 w-5 md:h-4  md:w-4" />
					<div class="hidden md:block">
						{phone}
					</div>
				</div></a
			>
		{/if}

		<a href="https://www.linkedin.com/in/vladimir-banderov/" target="_blank" rel="noreferrer">
			<div class="flex flex-row items-center space-x-1">
				<img src={LinkedInIcon} alt="LinkedIn icon" class="h-5 w-5 md:h-4  md:w-4" />
				<div class="hidden md:block">LinkedIn</div>
			</div>
		</a>

		<div class="flex flex-row items-center space-x-1">
			<img src={LocationIcon} alt="Location icon" class="h-5 w-5 md:h-4  md:w-4" />
			<div>Calgary, AB</div>
		</div>
	</div>
</div>
