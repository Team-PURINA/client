<script lang="ts">
	import dayjs from 'dayjs';

	export let id: number;
	export let title: string;
	export let createdAt: string;
	export let author: string;
</script>

<a href="/notice/{id}" class="w-full flex justify-between items-center">
	<div class="h-fit px-[1.4375rem] pt-[1.3125rem] pb-3.5 cursor-pointer">
		<p class="mb-1 text-white text-xl leading-normal not-italic font-semibold">
			{title}
		</p>
		<p class="text-[#888] text-sm leading-normal not-italic font-semibold">
			{dayjs(createdAt).format('YYYY.DD.MM.')}
		</p>
	</div>
	<p class="text-[#888] font-semibold text-sm mr-8">{author}</p>
</a>
