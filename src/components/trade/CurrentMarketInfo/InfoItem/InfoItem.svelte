<script lang="ts">
	export let label: string;
	export let value: number;
</script>

<div class="w-[12.5rem] h-20 p-2">
	<p class="text-[#888] text-[0.625rem] font-semibold">{label}</p>
	<p class="text-white text-sm font-semibold">${value.toLocaleString('ru-RU')}</p>
</div>
