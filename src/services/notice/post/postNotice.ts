import { axiosInstance } from '@/apis';

const postNotice = async ({ title, content }: { title: string; content: string }) => {
	const { data } = await axiosInstance.post('/notice', { title, content });
	return data;
};

export default postNotice;
