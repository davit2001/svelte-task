
<script>
	export let message = '';
	export let description = '';
	import sendIcon from '../lib/assets/icons/send-icon.svg';
</script>

<div class="border border-primary-bgDefault rounded-lg px-5 py-4 flex justify-between items-center bg-secondary-bgDefault">
	<div>
		<h3 class="font-inter font-semibold text-general-bodyPrimary text-sm leading-[21px]">{message}</h3>
		<p class="text-primary-textDefault text-sm text-iconOnDark leading-[21px]">{description}</p>
	</div>
	<img alt="send-icon" src={sendIcon} />
</div>