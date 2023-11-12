const autoResizing = (textarea: HTMLTextAreaElement, _: string) => {
	return {
		update() {
			textarea.style.height = 'auto';
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};
};

export default autoResizing;
