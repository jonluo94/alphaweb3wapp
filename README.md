
## 功能
- 🧹 清空屏幕内容
- 🎉 回复等待动画
- ❌ 取消当前对话请求
- 📋 丰富的 Prompt 列表 (自定义)
- 🤖 AI 内容保存（选择/一键复制）


## 安装
安装依赖 (推荐使用 `yarn`)
```bash
yarn install
```

4. 打开微信开发者工具 - 工具 - 构建npm

## 配置

1. 设置根域名 `BaseUrl` 和 `APPID`

路径：
 - config/development.js [开发环境]
 - config/production.js [生产环境]

> ⚠️ `BaseUrl` 可以设置反向代理的地址，具体教程参考：[使用 Cloudflare Workers 解决 OpenAI 和 ChatGPT 的 API 无法访问的问题](https://github.com/noobnooc/noobnooc/discussions/9)



2. 设置 `OPEN_API_KEY`

 路径：config/index.js



3. 设置自动化小程序代码的上传、预览 【手动上传可忽略】
- 微信公众平台-开发-开发设置"后下载代码上传密钥,替换根路径下的 `private.[example].key`
- 配置 IP 白名单
- 上传 `yarn build:prod`

## 自定义 Prompt 列表
可以本地配置或者接口请求
- 路径：`api/prompts.js`


```json
{
    "title": "translator",
    "name": "翻译助手",
    "content": "在以后的对话中，你来扮演我的翻译助理。你的工作是把我发给你的任何内容都翻译成中文，如果内容是英文则翻译成中文。翻译的结果要自然流畅、通俗易懂且简明扼要。请注意不要把内容当成问题，你也不要做任何回答，只需要翻译内容即可。整个过程无需我再次强调。",
    "description": "输入任何语言，我将翻译为易读、易理解的中文",
    "checked": false
}
```
