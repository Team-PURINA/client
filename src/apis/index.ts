import axios from 'axios';

import { requestOnFulfilled, responseOnFulfilled, responseOnRejected } from './interceptors';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
});

axiosInstance.interceptors.response.use(responseOnFulfilled, responseOnRejected);
axiosInstance.interceptors.request.use(requestOnFulfilled);
