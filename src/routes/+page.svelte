<script>
	import BlockModal from '../components/Modal/BlockModal.svelte';
	import Modal from '../components/Modal/Modal.svelte';

	let showModal = false;
</script>

<div class=" w-full h-[100vh] flex items-center justify-center">
	<button on:click={() => (showModal = true)}>as caslcsmcsklacmlkscmkalsc</button>
	<Modal bind:showModal>
		<BlockModal />
	</Modal>
</div>
