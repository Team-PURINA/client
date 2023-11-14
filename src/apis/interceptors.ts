import { TOKEN } from '@/constants';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { axiosInstance } from '.';

export const responseOnFulfilled = async (res: AxiosResponse) => {
	if (res.status >= 400) {
		throw new Error(res.data);
	}

	return res;
};

/* todo : 다시 짜ㅣㄱ */
export const responseOnRejected = async (error: AxiosError) => {
	const { config } = error;
	const originalRequest = config;

	if (config?.url === '/login' && config?.method === 'put') {
		localStorage.removeItem(TOKEN.ACCESS_TOKEN);
		localStorage.removeItem(TOKEN.REFRESH_TOKEN);
		return;
	}

	if (error.response?.status === 403) {
		try {
			const {
				data: { accessToken }
			} = await axiosInstance.put('/login', null, {
				headers: {
					'Refresh-Token': localStorage.getItem(TOKEN.REFRESH_TOKEN)
				}
			});

			localStorage.setItem(TOKEN.ACCESS_TOKEN, accessToken);

			if (originalRequest) return axiosInstance(originalRequest);
		} catch (e) {
			throw e as Error;
		}
	}

	return error;
};

export const requestOnFulfilled = async (config: InternalAxiosRequestConfig) => {
	const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);

	if (!config.headers || !accessToken) return config;

	config.headers.Authorization = accessToken;

	return config;
};
