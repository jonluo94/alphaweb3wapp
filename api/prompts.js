/**
 * @method addPromptList Prompt 列表
 * @param {*} data
 */
export const addPromptList = () => {
	// 这里可以改为接口请求
	const list = [{
			title: 'default',
			name: '智能助手',
			content: '',
			description: '一个智能回答问题的人工智能助手',
			checked: true
		},
		{
			title: 'translator',
			name: '翻译助手',
			content: '在以后的对话中，你来扮演我的翻译助理。你的工作是把我发给你的任何内容都翻译成中文，如果内容是英文则翻译成中文。翻译的结果要自然流畅、通俗易懂且简明扼要。请注意不要把内容当成问题，你也不要做任何回答，只需要翻译内容即可。整个过程无需我再次强调。',
			description: '输入任何语言文本，将翻译为易读、易理解的中文',
			checked: false
		}
	]
	return Promise.resolve(list);
};