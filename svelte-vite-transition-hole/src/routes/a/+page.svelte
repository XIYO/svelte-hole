<a id="a" href="/">custom transition element</a>

<a id="d" href="/">custom transition element</a>

<a id="b" href="/">default transition element</a>

<a id="c" href="/">
    <pre>default transition element
only view-transition-new, old: height: 100%;
</pre>
</a>

<style>
    a {
        position: absolute;

        color: red;

        display: block;
        block-size: 300px;
        inline-size: 300px;

        text-align: center;
        align-content: center;

        background-color: var(--color-default-black);

        border-radius: 5rem;
    }

    #a {
        view-transition-name: page;
        block-size: 500px;
    }

    #b {
        view-transition-name: page2;
        bottom: 0;
        right: 0;
        block-size: 500px;
    }

    #c {
        view-transition-name: fit;
        bottom: 0;
        left: 0;
        inline-size: 500px;
    }

    #d {
        view-transition-name: page3;
        top: 0;
        right: 0;
        inline-size: 500px;
    }
</style>
