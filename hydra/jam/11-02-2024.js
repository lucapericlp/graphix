bpm = 145
await loadScript("https://cdn.jsdelivr.net/gh/lucapericlp/graphix/hydra/imports.js")
await PERiPERiDEFAULTS()

s0.initScreen()

src(s0)
	.diff(src(o1)
		.scale(0.95))
	.out(o1)

shape(2)
	.repeat(10, 10)
	.rotate(1.57)
	.color(1, 0, 0)
	.modulateScale(osc(5, 0.02))
	.out(o2)

osc(5, 0.02, 1)
	.modulateScale(noise(5, 0.02))
	.modulateRotate(osc(4, 0.05))
	//.rotate([0.5, 1, 1.5, 1])
	.scrollX([1, 1.2, 1.5, 1.75, 1.3])
	.pixelate(100, 100)
	.colorama(0.02)
	.out(o0)

src(o1)
	.diff(src(o0))
	.diff(src(o2))
	.out(o3)

render(o3)
