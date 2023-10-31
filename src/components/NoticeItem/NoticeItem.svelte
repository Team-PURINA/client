<script lang="ts">
	import { format } from 'date-fns';

	export let id: number;
	export let title: string;
	export let date: string;
</script>

<a href="/notice/{id}" class="w-full">
	<div class="w-full h-fit px-[1.4375rem] pt-[1.3125rem] pb-3.5 cursor-pointer">
		<p class="mb-1 text-white text-xl leading-normal font-semibold">
			{title}
		</p>
		<p class="text-[#888] text-sm leading-normal font-semibold">
			{format(new Date(date), 'yyyy.dd.MM.')}
		</p>
	</div>
</a>
