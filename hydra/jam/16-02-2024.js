await loadScript("https://lucapericlp.github.io/graphix/hydra/imports.js")
ddj = await PERiPERiDEFAULTS()

shape(2)
	.color(1,0,0)
	.scale(() => ddj["LH"]() * 3)
	.modulatePixelate(osc(2))
	.out(o0)

osc(5, 0.2, 1)
	.repeat(3, 3)
	.rotate(0.5)
	.diff(src(o1)
		.scale(1.05)
		.scrollX([0.2, 0.3, 0.4]))
	.out(o1)

src(o0)
	.diff(src(o1))
	//.mult(text("THANK YOU!").color(1,1,1), () => ddj["RH"]())
	.out(o2)


render(o2)
