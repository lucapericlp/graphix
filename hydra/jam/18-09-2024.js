bpm = 138

osc([10,4,1], 0.2, 0.6)
  .modulateScale(osc(5, 0.5))
  //.color(1, 0, 0.1)
  .mult(
  	shape(2)
  	.rotate([1, 2, 3, 2])
  	.scale([1, 1.25, 1.55, 1.15])
  	.modulateRotate(osc(10, 0.5))
  	//.scrollX(1.5)
  	//.repeat([3, 1, 4, 2, 5], [2, 4, 8, 10])
  )
  .blend(
  	src(o0)
  	.rotate(0.5)
  , 0.5)
  .out()
