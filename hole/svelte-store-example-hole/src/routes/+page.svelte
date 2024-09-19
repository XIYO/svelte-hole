<script>
    import { count } from '$lib/index.js';
    import {onMount} from "svelte";

    function increase() {
        count.update((n) => n + 1);
        console.log('increased count', $count);
    }

    function decrease() {
        count.update((n) => n - 1);
    }

    increase(); // 서버, 클라이언트 둘 다 동작. // server 1, client 1

    onMount(() => {
        increase(); // 클라이언트에서만 동작 // server 1, client 2
    });
</script>

<h1>{$count}</h1>

<button onclick={increase}>increase</button>
<button onclick={decrease}>decrease</button>

<div>
    새로 고침을 하면 서버와 클라이언트에 각 각 따로 관리된다.<br>
    서버는 유지, 클라이언트는 초기화
</div>
