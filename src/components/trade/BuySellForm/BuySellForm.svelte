<script lang="ts">
	import type { TradeData } from '@/types/trade';
	import classNames from 'classnames';

	let screen: '매수' | '매도' = '매수';
	const rates = [25, 50, 75, 100];

	export let tradeData: TradeData;
</script>

<div class="w-[16.25rem] px-[1.625rem] flex flex-col justify-between shrink-0">
	<div>
		<div class="flex mb-8 border-b-[0.0625rem] border-[#2B2B2B] border-solid">
			<button
				class={classNames(
					'w-1/2 text-[#788293] py-1 text-xs border-b-2 border-solid border-0 border-transparent',
					screen === '매수' && 'text-[#F75467] border-b-[#F75467] border-b-2 border-solid'
				)}
				on:click={() => {
					screen = '매수';
					tradeData.tradeType = 'BUY';
				}}
			>
				SLT 매수
			</button>
			<button
				class={classNames(
					'w-1/2 text-[#788293] py-1 text-xs border-b-2 border-solid border-0 border-transparent',
					screen === '매도' && 'text-[#F75467] border-b-[#F75467]'
				)}
				on:click={() => {
					screen = '매도';
					tradeData.tradeType = 'SELL';
				}}
			>
				SLT 매도
			</button>
		</div>
		<div class="flex gap-2.5 items-center mb-5">
			<p class="text-[#788293] font-semibold text-[0.625rem]">주문가능</p>
			<p class="text-white font-semibold text-sm">52 SLT</p>
		</div>
		<div class="flex gap-2.5 items-center mb-5">
			<p class="text-[#788293] font-semibold text-[0.625rem]">주문가격</p>
			<p class="text-white font-semibold text-sm">$438 200 570</p>
		</div>
		<div class="gap-x-2.5 gap-y-1 mb-1.5 items-center grid" style="grid-template-columns: auto 1fr">
			<p class="text-[#788293] font-semibold text-[0.625rem] break-keep">주문수량</p>
			<div
				class="w-40 h-6 rounded border-[0.03125rem] border-solid border-[#788293] bg-transparent flex items-center px-1 gap-1"
			>
				<input
					class="flex-1 h-3 bg-transparent text-white text-[0.625rem] placeholder:text-[0.625rem] text-right"
					placeholder="0.001"
					bind:value={tradeData.amount}
				/>
				<p class="text-[#788293] text-[0.625rem] font-semibold">SLT</p>
			</div>
			<div class="col-start-2 w-40">
				<div class="flex justify-between">
					{#each rates as rate (rate)}
						<button
							class="w-8 h-5 rounded border-[0.03125rem] border-solid border-[#788293] text-[0.5rem] text-white"
						>
							{rate}%
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex gap-1 justify-end">
			<p class="text-[#788293] text-[0.5rem] font-semibold">거래 후 보유 머니</p>
			<p class="text-white text-[0.5rem] font-semibold">#438 200 570</p>
		</div>
	</div>
	<div>
		<div class="flex justify-between mb-1">
			<p class="text-white text-sm font-semibold">1 SLT =</p>
			<p class="text-white text-sm font-semibold">100 머니</p>
		</div>
		<button
			class="w-full h-[2.375rem] rounded bg-[#0083B6] text-sm font-semibold text-white mb-[1.375rem]"
		>
			매도하기
		</button>
	</div>
</div>
