import axios from 'axios';

import { env } from '$env/dynamic/public';
import { requestOnFulfilled, responseOnFulfilled, responseOnRejected } from './interceptors';

export const axiosInstance = axios.create({
	baseURL: env.PUBLIC_AXIOS_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
});

axiosInstance.interceptors.response.use(responseOnFulfilled, responseOnRejected);
axiosInstance.interceptors.request.use(requestOnFulfilled);
