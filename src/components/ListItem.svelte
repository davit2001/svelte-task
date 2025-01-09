<script>
	export let text = '';
	export let link = '';

	import arrowRightIcon from '../lib/assets/icons/arrow-right.svg';
</script>

<a href={link} class="py-2.5 px-3 flex justify-between">
	<p class="text-sm text-general-bodyPrimary leading-[21px] font-inter">{text}</p>
	<img src={arrowRightIcon} alt="Arrow Right Icon" />
</a>