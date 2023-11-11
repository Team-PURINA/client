import { axiosInstance } from '@/apis';

const getNoticeList = async () => {
	const { data } = await axiosInstance.get('/notice');

	return data;
};

export default getNoticeList;
