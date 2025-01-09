<script>
	import searchIcon from '../lib/assets/icons/search-icon.svg';
	import ListItem from './ListItem.svelte';

	export let listItems = [
		{text: 'In-game bonuses and free spins', href: ''},
		{text: 'Crypto deposit still not credited?', href: ''},
		{text: 'EigerX VIP program overview', href: ''},
		{text: 'Achievements and awards', href: ''},
	];

	let searchQuery = '';
	$: filteredList = listItems.filter(item =>
		item.text.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<div class="absolute left-0 right-0 top-[80px] mx-auto max-w-[368px] bg-general-background rounded-md shadow-custom p-2 h-full max-h-[229px] overflow-y-auto">
	<div class="flex items-center bg-secondary-bgDefault rounded-md px-3 py-2.5 shadow-md">
		<input
			bind:value={searchQuery}
			type="text"
			placeholder="Search for help"
			class="bg-transparent text-sm font-inter font-semibold border-none p-0 flex-grow text-general-bodyPrimary placeholder-general-bodyPrimary focus:outline-none focus:ring-0"
		/>
		<img src={searchIcon} alt="Search Icon" />
	</div>
	<ul class="flex flex-col">
		{#each filteredList as {text, href}}
			<ListItem text={text} link={href} />
		{/each}
	</ul>
	{#if filteredList.length === 0}
		<p class="text-general-bodyPrimary text-sm font-inter font-medium">
			No results found.
		</p>
	{/if}
</div>