import { axiosInstance } from '@/apis';

const doTrade = async (tradeData: {
	amount: number;
	coinName: string;
	tradeType: 'BUY' | 'SELL';
}) => {
	const { data } = await axiosInstance.post('/trade', tradeData);
	return data;
};

export default doTrade;
