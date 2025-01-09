<script lang="ts">
	export let images: string[] = [];
	export let maxVisible = 3;
</script>

<div class="flex flex-row-reverse justify-end -space-x-3 space-x-reverse">
	{#each images.slice(0, maxVisible) as image}
		<div
			class="relative flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-general-background"
		>
			<img
				class="h-full w-full rounded-full object-cover object-center"
				src={image}
				alt="User Avatar"
			/>
		</div>
	{/each}

	{#if images.length > maxVisible}
		<div
			class="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white bg-gray-400"
		>
			+{images.length - maxVisible}
		</div>
	{/if}
</div>