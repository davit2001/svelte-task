<script>
	export let link;
	export let text;
	export let Icon;
	export let isActive = false;
</script>

<a
	href={link}
	class="flex flex-col gap-2 justify-center items-center flex-1 h-[80px] transition-all duration-300 ease-in-out
	{isActive ? 'text-primary-bgDefault fill-primary-bgDefault stroke-primary-bgDefault' : 'text-general-bodyPrimary fill-general-bodyPrimary stroke-general-bodyPrimary'}
	hover:scale-105 hover:text-primary-bgHover"
>
	<Icon
		class="{isActive ? 'fill-primary-bgDefault stroke-primary-bgDefault' : 'fill-general-bodyPrimary'}
      transition-all duration-300 ease-in-out hover:fill-primary-bgHover"
	/>
	<span
		class="font-inter text-sm leading-[21px]
      {isActive ? 'text-primary-bgDefault' : 'text-general-bodyPrimary'}
      transition-colors duration-300 ease-in-out"
	>
    {text}
  </span>
</a>