<script>
	import { onMount } from 'svelte';
	import { codeToHtml, createCssVariablesTheme, createHighlighter } from 'shiki';
	import { marked } from 'marked';

	let html = $state('')

	// 기본값으로 사용자 정의 CSS 변수 테마 생성
	const myTheme = createCssVariablesTheme({
		name: 'css-variables',
		variablePrefix: '--shiki-',
		variableDefaults: {},
		fontStyle: true
	})


	onMount(async () => {
		const highlighter = await createHighlighter({
			langs: ['javascript'],
			themes: [myTheme] // 테마 등록
		})

		const code = `
const x = 10
console.log(x)
`.trim()
		html = highlighter.codeToHtml(code, {
			theme: 'css-variables', // use the theme
			lang: 'js',
		})
	});
</script>

<svelte:head>
	<style>
      pre {
          background-color: #2e3440;
          padding: 1em;
          border-radius: 8px;
      }
      code {
          font-family: 'Fira Code', monospace;
      }
	</style>
</svelte:head>

<main>
	hi
	{@html html}
</main>

<style>
    :root {
        --shiki-foreground: #eeeeee;
        --shiki-background: #333333;
        --shiki-token-constant: #660000;
        --shiki-token-string: #770000;
        --shiki-token-comment: #880000;
        --shiki-token-keyword: #990000;
        --shiki-token-parameter: #aa0000;
        --shiki-token-function: #bb0000;
        --shiki-token-string-expression: #cc0000;
        --shiki-token-punctuation: #dd0000;
        --shiki-token-link: #ee0000;

        /* Only required if using lang: 'ansi' */
        --shiki-ansi-black: #000000;
        --shiki-ansi-black-dim: #00000080;
        --shiki-ansi-red: #bb0000;
        --shiki-ansi-red-dim: #bb000080;
        --shiki-ansi-green: #00bb00;
        --shiki-ansi-green-dim: #00bb0080;
        --shiki-ansi-yellow: #bbbb00;
        --shiki-ansi-yellow-dim: #bbbb0080;
        --shiki-ansi-blue: #0000bb;
        --shiki-ansi-blue-dim: #0000bb80;
        --shiki-ansi-magenta: #ff00ff;
        --shiki-ansi-magenta-dim: #ff00ff80;
        --shiki-ansi-cyan: #00bbbb;
        --shiki-ansi-cyan-dim: #00bbbb80;
        --shiki-ansi-white: #eeeeee;
        --shiki-ansi-white-dim: #eeeeee80;
        --shiki-ansi-bright-black: #555555;
        --shiki-ansi-bright-black-dim: #55555580;
        --shiki-ansi-bright-red: #ff5555;
        --shiki-ansi-bright-red-dim: #ff555580;
        --shiki-ansi-bright-green: #00ff00;
        --shiki-ansi-bright-green-dim: #00ff0080;
        --shiki-ansi-bright-yellow: #ffff55;
        --shiki-ansi-bright-yellow-dim: #ffff5580;
        --shiki-ansi-bright-blue: #5555ff;
        --shiki-ansi-bright-blue-dim: #5555ff80;
        --shiki-ansi-bright-magenta: #ff55ff;
        --shiki-ansi-bright-magenta-dim: #ff55ff80;
        --shiki-ansi-bright-cyan: #55ffff;
        --shiki-ansi-bright-cyan-dim: #55ffff80;
        --shiki-ansi-bright-white: #ffffff;
        --shiki-ansi-bright-white-dim: #ffffff80;
    }
</style>
