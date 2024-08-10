import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remarkMermaid from 'remark-mermaidjs';
import remarkRehype from 'remark-rehype';

async function markdown(markdown) {
	return unified()
		.use(remarkParse)
		.use(remarkMermaid)
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(markdown);
}

const markdownContent = `
# Hello, world!

This is a markdown content.

\`\`\`mermaid
graph TD;
	A-->B;
	A-->C;
	B-->D;
	C-->D;
\`\`\`
`;

export async function load({ page }) {
	const post = await markdown(markdownContent);
	return {
		post
	};
}
