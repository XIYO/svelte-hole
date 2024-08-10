<script>
	import { T } from '@threlte/core';
	import { OrbitControls, TrackballControls } from '@threlte/extras';
</script>


<T.PerspectiveCamera
	makeDefault
	position={[0, 0, 5]}
>
	<TrackballControls
	/>
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
