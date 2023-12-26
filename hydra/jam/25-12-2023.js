//  .scale(1,1,()=>window.innerWidth/window.innerHeight)
// a.show()
// bpm = 138

a.show()
bpm = 128

randomArray = (l=12)=> Array.from({length: l}, () => (Math.random() * 2)+2);

// my first
osc(100, 0.02, ({time}) => Math.abs(Math.sin(time)*2)+0.1)
  .kaleid(randomArray())
  .hue(-0.5)
  .modulateHue(o0, randomArray())
  .modulateScrollX(osc(1.5, 0.5))
  .blend(src(o0).modulate(o0,.04).invert(), .6)
  .scale(1,1,()=>window.innerWidth/window.innerHeight)
  .out(o1)


// second one
osc(100,0.1,1)
	.kaleid(randomArray())
	.hue(-0.1)
	.modulate(noise(randomArray(),0),0.5)
  	.modulateRotate(osc(12,0).kaleid(20),4)
	.pixelate(1e10, 1e10)
	//.blend(src(o1).modulate(o1, 0.04))
	//.scale(1,1,()=>window.innerWidth/window.innerHeight)
  	.out(o0)

// third one
osc(100, 0.04, 1.2)
  .hue(1.9)
  .saturate(-2)
  .rotate([1, 0, 1, 0])
  .modulateScale(noise(5))
  .modulateScrollY(osc(5, 0.1, 0))
  .pixelate([5, 10, 20, 40, 80, 160, 320, 320, 320, 160, 80, 40, 20, 10, 5], 1e10)
  .out()

