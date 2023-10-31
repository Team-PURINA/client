<script lang="ts">
	const WALLETS = [
		{
			id: 1,
			name: 'Nest.JS',
			currencyNmae: 'NST',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Spring Boot',
			currencyNmae: 'SBT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Azure',
			currencyNmae: 'AZR',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Svelte',
			currencyNmae: 'SLT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Preact',
			currencyNmae: 'PRT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Qwik',
			currencyNmae: 'QWK',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		}
	] as const;
</script>

<div class="w-full h-full px-11 py-9 flex">
	<div>
		<p class="text-white text-[1.375rem] font-bold leading-normal mb-[2.125rem]">코인 카드</p>

		<div class="flex gap-1 items-end">
			<p class="text-white text-5xl font-bold">SBT</p>
			<p class="text-[#888] text-2xl font-semibold">Spring Boot</p>
		</div>
		<p class="mb-5">
			<span
				style="color: #30BAF0; font-size: 22px; font-family: Pretendard; font-weight: 700; word-wrap: break-word"
				class="text-[#30BAF0] text-[1.375rem] font-bold break-words"
			>
				$693 014 400
			</span>
			<span
				style="color: #888888; font-size: 16px; font-family: Pretendard; font-weight: 700; word-wrap: break-word"
			>
				300코인 보유 x 23 100 48
			</span>
		</p>
		<div class="flex flex-col gap-8">
			<div>
				<div class="flex gap-1.5 items-center mb-[0.1875rem]">
					<p class="text-white">총 수익</p>
					<div class="flex items-center gap-[0.3125rem]">
						<p class="text-xl font-bold text-[#0ECB81]">3.8%</p>
						<p class="text-[#888] font-semibold text-base">$200 288 000</p>
					</div>
				</div>
				<p class="text-[#888] text-xs font-medium">총 몇 퍼센트의 수익을 냈는지를 알려줘요.</p>
			</div>
			<div>
				<div class="flex gap-1.5 items-center mb-[0.1875rem]">
					<p class="text-white">평균 단가</p>
					<p class="text-xl font-bold text-[#0ECB81]">$90 210</p>
				</div>
				<p class="text-[#888] text-xs font-medium">
					현재 단가는 $210 900원, 우빈님은 $120 690일 때 구매했어요.
				</p>
			</div>
			<div>
				<div class="flex gap-1.5 items-center mb-[0.1875rem]">
					<p class="text-white">총 구매수</p>
					<p class="text-xl font-bold text-white">3 210</p>
				</div>
				<p class="text-[#888] text-xs font-medium">이때까지 구매한 해당 코인의 개수를 보여줘요.</p>
			</div>
			<div>
				<div class="flex gap-1.5 items-center mb-[0.1875rem]">
					<p class="text-white">마지막 거래일</p>
					<p class="text-xl font-bold text-white">2023.10.30. 오후 12:58:21</p>
				</div>
				<p class="text-[#888] text-xs font-medium">
					마지막으로 해당 코인을 매도/매수한 날짜를 보여줘요.
				</p>
			</div>
		</div>
	</div>
</div>
