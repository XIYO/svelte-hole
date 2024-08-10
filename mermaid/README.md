# 머메이드 그래프가 사라지는 버그

화면 최초 진입시 머메이드 그래프가 사라지는 버그

스벨트랩에서 재현을 하려고했지만 의부 의존성을 어떻게 설치하는지 몰라 코드로 제공합니다.

## 외부 의존성

https://github.com/remcohaszing/remark-mermaidjs
마크다운 파서의 머메이드 플러그인을 사용하기 때문에 추가적으로 설치해야 합니다. 

```shell
npx playwright install --with-deps chromium
```

## 코드

`depencencies`
```text
"unified": "^11.0.5",
"rehype-stringify": "^10.0.0",
"remark-parse": "^11.0.0",
"remark-rehype": "^11.1.0",
"remark-mermaidjs": "^6.0.0"
```

`+page.svelte`
```sveltehtml
<script>
	const { data } = $props();
	const post = data.post;
</script>

{@html post}
```

`+page.js`
```sveltehtml
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
```
