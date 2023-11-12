<script lang="ts">
	import usePostNoticeMutation from '@/hooks/notice/post/usePostNoticeMutation.hook';
	import { autoResizing } from '@/utils';
	let title: string;
	let content: string;

	const mutation = usePostNoticeMutation();
</script>

<div class="w-full min-h-full px-[2.125rem] py-5">
	<form class="w-[60rem] min-h-full mx-auto px-[3.375rem] py-11 flex flex-col">
		<input
			class="text-white font-medium text-4xl placeholder:text-[#888] mb-[1.125rem]"
			placeholder="공지사항의 제목을 입력해주세요."
			bind:value={title}
		/>
		<button
			class="text-white px-[1.125rem] py-2 bg-[#0083B6] font-semibold text-xs rounded self-end mb-5"
			on:click={() => $mutation.mutate({ title, content })}
		>
			작성하기
		</button>
		<textarea
			class="text-white font-medium text-lg resize-none"
			placeholder="공지사항의 내용을 작성해주세요."
			rows={1}
			use:autoResizing={content}
			bind:value={content}
		/>
	</form>
</div>
