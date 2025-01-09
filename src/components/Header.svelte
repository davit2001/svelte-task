<script>
	import TeamHeader from './TeamHeader.svelte';
	import MessageCard from './MessageCard.svelte';
	import Title from './Title.svelte';
	import HelpSection from './HelpSection.svelte';

</script>

<header class="p-4 h-full">
	<div class="p-5 pb-4 flex flex-col justify-between h-full max-h-[236px]">
		<TeamHeader />
		<Title />
	</div>
	<div class="relative h-full">
		<MessageCard message="Send us a message" description="We typically reply within a day" />
		<HelpSection />
	</div>
</header>