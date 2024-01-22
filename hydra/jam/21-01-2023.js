bpm = 129

osc(6, 0.1, 1).hue(1.5)
  .modulateScale(noise(15))
  .modulateRotate(osc(6, 0.2))
  .modulatePixelate(osc(6, 0.02))
  .diff(
  	shape(8, 0.75)
  	.repeat(3, 3)
  	.rotate([0.5, 1, 1.5].smooth(0.5))
  	.scrollX(1.5)
  	.modulateScrollY(osc(2, 0.3))
  )
  .out()

// iteration on above

await loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js")
fade_shape = _.range(0, 1.1, 0.05).concat(_.fill(Array(10), 1));

bpm = 139

osc(6, 0.1, 1).hue(1.5)
  .modulateScale(voronoi(10))
  .modulateRotate(osc(6, 0.2))
  .modulatePixelate(osc(6, 0.02))
  .diff(
  	shape(8, 0.75)
  	.repeat([10, 20, 30, 20, 10], [5, 7, 11])
  	//.rotate([1, 2, 3, 4, 3, 2].smooth(0.5))
  )
//.mult(shape(4).color(0,0,0), fade_shape)
  .out()
