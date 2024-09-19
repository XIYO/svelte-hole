<script>
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { BackSide, MeshPhysicalMaterial } from 'three';

	const color = 0xffffff;

	const HEIGHT = 1.5;
	const ASPECT_RATIO = 16 / 9;

	const wallMaterial = new MeshPhysicalMaterial({ color, side: BackSide });
	const windowMaterial = new MeshPhysicalMaterial({ side: BackSide, transmission: 1, roughness: 0, thickness: 2 });

	const materials = [
		wallMaterial,
		wallMaterial,
		windowMaterial,
		wallMaterial,
		windowMaterial,
		windowMaterial,
	];

	interactivity();
</script>

<T.Mesh
	material={materials}
	position={[0, 0, 0]}
>
	<T.BoxGeometry
		args={[ASPECT_RATIO * HEIGHT, HEIGHT, HEIGHT * 2]}
	/>
</T.Mesh>
