<script>
	import logo from '../lib/assets/eigerX-logo.svg';
	import AvatarGroup from './AvatarGroup.svelte';
	import sampleAvatar1 from '../lib/assets/sample-image-1.png';
	import sampleAvatar2 from '../lib/assets/sample-image-2.png';
	import sampleAvatar3 from '../lib/assets/sample-image-3.png';

	const avatarsImages = [sampleAvatar1, sampleAvatar2, sampleAvatar3];
</script>

<div class="flex justify-between">
	<img src={logo} alt="Company logo" />
	<AvatarGroup images={avatarsImages} />
</div>