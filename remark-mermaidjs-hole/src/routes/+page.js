import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
// import rehypeMermaid from 'rehype-mermaid';
import remarkMermaid from 'remark-mermaid';

async function markdown(markdown) {
	return unified()
		.use(remarkParse)
		.use(remarkMermaid)
		.use(remarkRehype)
		// .use(rehypeMermaid)
		.use(rehypeStringify)
		.process(markdown);
}

const markdownContent = `
# Hello, world!

This is a markdown content.

\`\`\`mermaid
graph TD;
	A-->B;
\`\`\`
`;

export async function load({ page }) {
	const post = String(await markdown(markdownContent));

	return {
		post
	};
}
