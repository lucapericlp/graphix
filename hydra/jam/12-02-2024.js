bpm = 126

// idle visualisations to use for 2 step

await loadScript("https://cdn.jsdelivr.net/gh/lucapericlp/graphix/hydra/imports.js")
await PERiPERiDEFAULTS()

// colourful square
/*src(o0)
	.modulateHue(src(o0)
		.scale(1.01), 1)
	.layer(osc(4, 0.5, 2)
		.mask(shape(4, 0.5, 0.0001)
			.rotate([0.5, 1.5, 2.5, 3.5, 2.5, 1.5])))
	.out(o0)*/

// red and black interesting patterns
/*shape(99)
	.scale(3.2)
	.repeat(3, 3)
	.color(1, 0, 0)
	.modulatePixelate(osc([2, 3, 4, 10]))
	.out()*/

// grid of reds & blacks
/*solid(() => beats(1).curve(3)(),0,0).out(o0)
solid(beats(1).curve(1),0,0).out(o1)
solid(beats(1),0,0).out(o2)
solid(() => beats(1).curve(3)(),0,0).out(o3)
render()*/


// hexagon grid
shape(6)
	.scale(3, ()=>innerHeight/innerWidth)
	.repeat(3,3)
	.modulateScale(osc(2, 0.2))
	.color(beats(4), 0, 0)
	.out()
