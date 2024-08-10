<script>
	import { Canvas } from '@threlte/core';
	import CameraAndLight from '$lib/hole/CameraAndLight.svelte';
	import Gltf from '$lib/models/Gltf.svelte';
	import { Studio, Theatre } from '@threlte/theatre';
	import MyEnvironment from '$lib/hole/MyEnvironment.svelte';
	import Box from '$lib/models/Box.svelte';

	import { dev } from '$app/environment'


	// const { renderer } = useThrelte();
	// renderer.setClearColor(0xfffffff, 0); // 렌더러의 배경색을 투명하게 설정
</script>

<h1>Threlte Hole 1</h1>

<!--<Studio enabled={true} />-->

<Canvas>
	<Theatre>
		<CameraAndLight />
			<MyEnvironment />
			<Box />
<!--		<Gltf />-->
	</Theatre>
</Canvas>

<style>
    :root {
        background-color: royalblue;
    }
</style>
