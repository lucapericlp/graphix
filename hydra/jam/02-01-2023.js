bpm = 133

// first
src(s0)
  //.modulateScrollX(osc(1, 1))
  //.modulateRotate(noise(5, 0.01))
  //.rotate([1, 2, 3, 4])
  //.posterize(3, 3)
  //.pixelate(800, () => Math.sin(time)*300)
  .diff(
  	src(o0)).modulateScale(osc(5, 0.1))
  .out()


// second
bpm = 135

osc(5, 0.9, 0.001)
	.rotate([1, 2, 3])
    .kaleid([3,4,5,7,8,9,10].smooth(0.1))
    .color(0.5, 0.3)
    .colorama(0.4)
    .rotate([0.009, 0.018, 0.036],()=>Math.sin(time)* -0.001)
    .modulateRotate(o0,()=>Math.sin(time) * 0.003)
    .modulate(o0, 0.9)
    .scale(0.9)
    .out(o0)

