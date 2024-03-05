await loadScript("imports.js")
ddj = await PERiPERiDEFAULTS()

// art london red vibe
shape(0)
	.color(1, 0, 0)
	.layer(shape(0).color(0,0,0, () => beats_(2)() - 0.5))
	.out()

// art london 10-gon vibe
shape(0)
	.color(1, 0, 0)
	.layer(shape(0).color(0,0,0, () => beats_(2)() - 0.5))
	.mult(shape(10).color(1,1,1).thresh().scale(3.2, () => innerHeight/innerWidth).repeat(2,2))
	.out()
