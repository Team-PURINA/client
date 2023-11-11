<script lang="ts">
	import NoticeItem from './NoticeItem.svelte';

	export let noticeList: { id: number; title: string; createdAt: string; userName: string }[];
</script>

{#each noticeList as notice (notice.id)}
	<NoticeItem
		id={notice.id}
		title={notice.title}
		createdAt={notice.createdAt}
		author={notice.userName}
	/>
{/each}
