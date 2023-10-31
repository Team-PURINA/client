<script>
	import Aside from '../Aside/Aside.svelte';
</script>

<div class="flex h-full">
	<Aside />
	<div class="flex-1">
		<slot />
	</div>
</div>
