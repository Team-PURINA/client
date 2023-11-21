import { KEY } from '@/constants';
import getAllBlock from '@/services/trade/getAllBlock';
import type { CoinName } from '@/types';
import { createQuery } from '@tanstack/svelte-query';

const useGetAllBlockQuery = (coinName: CoinName) => {
	return createQuery({
		queryKey: [KEY.BLOCK, coinName],
		queryFn: () => getAllBlock(coinName)
	});
};

export default useGetAllBlockQuery;
