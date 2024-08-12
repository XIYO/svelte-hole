<script>
    import xiyo from '$lib/a.md';

    console.log(xiyo);
    const markdowns = import.meta.glob('/src/lib/*.md', {
        eager: true,
        import: 'default',
    });

    Object.entries(markdowns).forEach(([key, value]) => {
        console.log(key, '-', value);
    });
</script>

{@html xiyo.content}
<hr>

{#each Object.entries(markdowns) as [key, value]}
    <div>{@html value.content}</div>
    <hr>
{/each}
