// stream the screen with tinySamPoint running
bpm = 145

s0.initStream()

src(s0)
	.mult(shape(4)
		.scale(3.1)
		.luma())
	.repeat(3,3)
	.rotate([0.5, 1, 1.5])
	.colorama(0.02)
	.diff(src(o0).scale(1.05))
	.out()

//////
bpm = 150
await loadScript("https://cdn.jsdelivr.net/gh/lucapericlp/graphix/hydra/imports.js")
await PERiPERiDEFAULTS()

s0.initScreen()

text("EFFES")

shape(2, 0, 0.8)
	.color(1, 0, 0)
	.repeat(20, 20)
	.rotate(1.57)
	.mult(
		shape(2, 0, 0.8)
		.color(1, 0, 0)
		.repeat(10, 10)
		.rotate(2)
	)
	.rotate([0, 0.5, 1, 1.5, 0.5])
	.out(o1)

src(s0)
	.mult(shape(4)
		.scale(3.1)
		.luma())
	.repeat(10, 10)
	.rotate([0.5, 1, 1.5])
	.colorama(0.02)
	.diff(src(o0)
		.scale(1.05).modulate(osc(1, 0.02)))
	.out(o0)

text("EFFES")
	.color(1, 1, 1)
	.mult(
		src(o1)
		.blend(src(o0), 0.8))
	.out(o2)

render(o2)
