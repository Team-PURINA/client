<script>
	import NoticeLogoIcon from '../../../assets/NoticeLogoIcon.svelte';

	const notice = {
		title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
		createdAt: '2023.10.17',
		author: '박우빈',
		content: `새로운 UI 디자인:
부마코인 앱의 전체적인\n 사용자 인터페이스가 대대적으로 변경되었습니다. 사용자 경험을 향상시키기 위한 새로운 디자인이 도입되었습니다.

블록체인 시각화:
이제 부마코인 사용자들은 블록체인 작동 원리를 더 쉽게 이해할 수 있습니다. 새로운 시각화 도구를 통해 블록체인 트랜잭션의 흐름과 작동 방식을 시각적으로 볼 수 있습니다.

트랜잭션 역추적:
사용자는 이제 블록체인에서 특정 트랜잭션을 역추적하고 검색할 수 있습니다. 이를 통해 특정 거래의 상세 정보와 연결된 블록을 쉽게 찾을 수 있습니다.

개선된 지갑 관리:
지갑 관리 및 보안을 위한 새로운 기능이 도입되었습니다. 이제 사용자는 자신의 지갑을 더 효과적으로 관리하고 안전하게 보관할 수 있습니다.

사용자 통계 및 리포트:
새로운 사용자 통계 및 리포트 기능을 통해 사용자들은 자신의 트랜잭션 기록을 쉽게 분석하고 추적할 수 있습니다.

향상된 보안:
부마코인은 사용자들의 자산을 더욱 안전하게 보호하기 위한 업데이트를 진행했습니다. 보안 측면에서의 다양한 개선 사항이 포함되어 있습니다.

성능 향상:
부마코인 앱의 성능이 향상되어 빠르고 신속한 거래 처리를 지원합니다.

이 업데이트로 부마코인은 사용자들에게 블록체인 기술을 더욱 쉽게 이해하고 활용할 수 있는 기회를 제공합니다. 새로운 UI와 시각화 도구를 통해 블록체인 세계를 더욱 열린 공간으로 만들어 드립니다. 사용자들은 자산을 안전하게 보호하면서 편리하게 거래를 진행할 수 있을 것입니다.
`
	};

	let isAdmin = true;
</script>

<div class="flex flex-col items-center px-24 py-20 gap-16">
	<div class="flex flex-col gap-2">
		<span class=" font-semibold text-4xl text-white">{notice.title}</span>
		<div class="flex items-center mt-1">
			<span class=" font-medium text-[#888888] text-base">{notice.createdAt} · {notice.author}</span
			>
			{#if isAdmin}
				<button
					class="rounded-sm ml-auto py-1 px-3 bg-[#FF5454] text-white text-sm font-medium w-fit"
					>공지 삭제</button
				>
			{/if}
		</div>
	</div>
	<div class=" w-full h-fit flex items-center justify-center gap-10">
		<NoticeLogoIcon />
		<span
			class="bg-gradient-to-r from-[#31BCF2] to-[#0A759E] text-transparent bg-clip-text text-7xl font-bold"
			>BUMACOIN</span
		>
	</div>
	<div class=" w-10/12 text-white text-lg whitespace-pre-wrap">
		{notice.content}
	</div>
</div>
