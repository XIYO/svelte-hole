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
        block-size: 200px;
        inline-size: 200px;

        background-color: var(--color-default-black);

        text-align: center;
        align-content: center;

        border-radius: 5rem;
    }

    #a {
        view-transition-name: page;
    }

    #b {
        view-transition-name: page2;
        bottom: 0;
        right: 0;
    }

    #c {
        view-transition-name: fit;
        bottom: 0;
        left: 0;
    }


    #d {
        view-transition-name: page3;
        top: 0;
        right: 0;
    }
</style>
