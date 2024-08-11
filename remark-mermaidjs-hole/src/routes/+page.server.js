// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import rehypeStringify from 'rehype-stringify';
// import remarkRehype from 'remark-rehype';
// import remarkMermaid from 'remark-mermaidjs';
//
// async function markdown(markdown) {
// 	return unified()
// 		.use(remarkParse)
// 		.use(remarkMermaid, {
// 			mermaidConfig: {
// 				theme: 'dark'
// 			}
// 		})
// 		.use(remarkRehype)
// 		// .use(rehypeMermaid)
// 		.use(rehypeStringify)
// 		.process(markdown);
// }
//
// const markdownContent = `
// # Hello, world!
//
// This is a markdown content.
//
// \`\`\`mermaid
// graph TD;
// 	A-->B;
// 	A-->C;
// \`\`\`
// `;
//
// export async function load() {
// 	const post = String(await markdown(markdownContent));
//
// 	return {
// 		post
// 	};
// }
