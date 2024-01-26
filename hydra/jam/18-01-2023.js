bpm = 134

osc(10, 0.1, 0.5).modulateScale(osc(5, 0.5)).color(1, 0, 0.5)
  .mult(
  	shape(2)
  	.rotate([1, 2, 3, 2])
  	.scale([1, 1.25, 1.55, 1.15])
  	.modulateRotate(osc(10, 0.5))
  	.scrollX(1.5)
  	.repeat([3, 1, 4, 2, 5], [2, 4, 8, 10])
  )
  .blend(
  	src(o0)
  	.rotate(0.5)
  , 0.5)
  .out()

///////////////

bpm = 134

osc(10, 0.1, 0.5).color(1, 0, 0.5)
  .mult(
  	shape(2)
  	.rotate([1, 2, 3, 2])
  	.scale([1, 1.25, 1.55, 1.15])
  	.repeat([3, 1, 4, 2, 5], [2, 4, 8, 10])
  )
  .blend(
  	src(o0)
  	.rotate(1)
  , 0.5)
  .out()

///////////////

bpm = 140

osc(105)
  .color(0.5,0.1,0.8)
  .rotate(0.11, 0.1)
  .modulate(
  	osc(10)
  	.rotate(0.3)
  	.add(o0, 0.1)
  )
  .add(
  	osc(20,0.01,1)
  	.color(0,0.8,1)
  ).out(o0)

osc([10, 20, 30],0.01, 0.9)
  .color(1,0.7,0.5)
  .diff(o0)
  .modulate(o1,0.1)
  .out(o1)

render(o1)

////////

bpm = 140

osc(105)
  .color(0.5,0.1,0.8)
  .rotate(0.11, 0.1)
  .modulate(
  	osc(10)
  	.rotate(0.3)
  	.add(o0, 0.1)
  )
  .add(
  	osc(20,0.01,1)
  	.color(0,0.8,1)
  ).rotate(2).out(o0)

osc([10, 20, 30],0.01, 0.9)
  .color(1,0.7,0.5)
  .diff(o0, 0.9)
  .modulate(o1, 0.1)
  .rotate(1.5)
  .scrollY(0.5, 0.01)
  .scrollX(1, 0.16)
  .out(o1)

render(o1)

/////////////
