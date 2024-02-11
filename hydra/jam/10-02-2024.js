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
