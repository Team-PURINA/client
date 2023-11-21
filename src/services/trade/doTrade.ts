import { axiosInstance } from '@/apis';
import type { TradeData } from '@/types/trade';

const doTrade = async (tradeData: TradeData) => {
	const { data } = await axiosInstance.post('/trade', {
		...tradeData,
		amount: +tradeData.amount
	});
	return data;
};

export default doTrade;
