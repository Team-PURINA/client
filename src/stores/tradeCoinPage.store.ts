import type { CoinName } from '@/types';
import { writable } from 'svelte/store';

const tradeCoinPageStore = writable<CoinName>('Svelte');

export default tradeCoinPageStore;
