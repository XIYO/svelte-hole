<script>
    import '$lib/stylesheet/app.css';
    import {onNavigate} from '$app/navigation';

    const {children} = $props();

    onNavigate((navigation) => {
        if (
            !document.startViewTransition ||
            navigation.to.url.pathname === navigation.from.url.pathname
        )
            return;

        return new Promise((resolve) => {
            const transition = document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });

            transition.updateCallbackDone.then(() => {
            });

            transition.ready.then(() => {
            });

            transition.finished.then(() => {
            });
        });
    });
</script>

{@render children()}

<div id="container">
    <div>
        <a href="/">root</a>
        <a href="/a">transition page</a>
        <a href="/b">disappear transition element</a>
    </div>
</div>

<style>
    #container {
        position: absolute;

        top: 0;

        block-size: 100lvh;
        inline-size: 100lvw;

        text-align: center;
        align-content: center;

        & > div {
            display: flex;
            flex-direction: column;
        }
    }
</style>
