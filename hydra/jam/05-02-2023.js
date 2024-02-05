// experimenting with three.js & invisible text
await loadScript("https://cdn.jsdelivr.net/gh/rexmalebka/hydra-threejs@changes/hack/dist/hydra-three.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

const myFont = new FontFace('PressStart', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2');
await myFont.load();
document.fonts.add(myFont);

hydraText.font = "PressStart"
hydraText.lineWidth = "2%"

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
geometry = new THREE.BoxGeometry()
material = new THREE.MeshBasicMaterial({
	color: 0xfff
})
cube = new THREE.Mesh(geometry, material);
scene.add(cube)
camera.position.z = 1.5

// 'update' is a reserved function that will be run every time the main hydra rendering context is updated
update = () => {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

s0.init({
	src: renderer.domElement
})

src(s0)
	.kaleid(1.0)
	.repeat(2, 2)
	.blend(src(o0)
		.scale(1.02)
		.colorama(0.02))
	.diff(
  		text("TESTING")
		.color(0, 0.5, 0, 0)
  ).out()
