<script>
	import { page } from '$app/state';
	import NavigationItem from './NavigationItem.svelte';

	import HomeIcon from '../lib/assets/SvgIcons/HomeIcon.svelte';
	import MessageIcon from '../lib/assets/SvgIcons/MessageIcon.svelte';
	import HelpIcon from '../lib/assets/SvgIcons/HelpIcon.svelte';

	export let navigationItems = [
		{link: '/', text: 'Home', Icon: HomeIcon},
		{link: '/messages', text: 'Messages', Icon: MessageIcon},
		{link: '/help', text: 'Help', Icon: HelpIcon},
	];
</script>

<div class="flex bg-general-background border border-general-border rounded-md w-full max-w-[400px] z-10">
	{#each navigationItems as {link, text, Icon}}
		<NavigationItem isActive={page.url.pathname === link} link={link} text={text} Icon={Icon} />
	{/each}
</div>