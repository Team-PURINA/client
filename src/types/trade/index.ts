import type { CoinName } from '..';

export type TradeData = {
	tradeType: 'BUY' | 'SELL';
	amount: string;
	coinName: CoinName;
};
