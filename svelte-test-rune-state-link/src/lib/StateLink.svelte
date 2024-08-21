<script>
	let { value = $bindable() } = $props();

	let stateLinkValue = $state.link(value);
</script>

<h2>bindable - props로 전달받은 값을 state link 로 래핑</h2>
<button onclick={() => {stateLinkValue++}}>{stateLinkValue}</button>
