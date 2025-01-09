<script>
	import Navigation from '../components/Navigation.svelte';
	import '../app.css'
</script>

<div class="flex flex-col items-center w-full justify-between min-h-screen bg-black-gradient">
	<slot />
	<Navigation />
</div>