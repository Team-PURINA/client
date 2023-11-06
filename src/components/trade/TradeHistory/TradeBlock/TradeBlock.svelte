<script lang="ts">
	import classNames from 'classnames';

	export let id: number;
	export let classnames: string;
</script>

<div class="flex flex-col items-center gap-1">
	<div class="w-[6.25rem] h-20 flex items-center">
		<div class="w-2.5 h-[0.0625rem] bg-[#D9D9D9]" />
		<div
			class={classNames('w-20 h-20 rounded-[0.625rem] from-[#FFF5F2] to-[#FF460A]', classnames)}
		/>
		<div class="w-2.5 h-[0.0625rem] bg-[#D9D9D9]" />
	</div>
	<p class="text-[#888] text-sm font-semibold">#{id}</p>
</div>
