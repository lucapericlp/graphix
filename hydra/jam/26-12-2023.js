// first one
// glitch columns with recursive rotates
osc(30,0.01,1)
//.mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7))
.posterize(10, 1)
.modulateRotate(o0, [0, 0.2, 0.4, 0.8, 1.6, 3.2, 1.6, 3.2, 1.6, 0.8, 0.4, 0.2])
//.posterize([3,10,2].fast(0.5).smooth(1))
//.modulateRotate(o0,()=>mouse.x*0.003)
.out()

// second one
// dark amoebas
bpm = 131

randomArray = (l=12)=> Array.from({length: l}, () => (Math.random()));

osc(randomArray(),0.01,1)
.hue(randomArray().smooth(0.1))
.mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7))
.posterize(10, 2)
.modulateRotate(o0, [0, 0.2, 0.4, 0.8, 1.6, 3.2, 1.6, 3.2, 1.6, 0.8, 0.4, 0.2])
.out()


// jumpy CRT
bpm = 135

randomArray = (l=12, scale=1, increment=0)=> Array.from({length: l}, () => (Math.random()*scale)+increment);

//osc([100, 200, 300, 400, 500, 600, 700], 0.01, 1.4)
osc(randomArray(5, 100, 0).smooth(0), 0.01, 1.4)
	.rotate(0, 0.1)
	.mult(osc(randomArray(10, 10, 0), 0.1).modulate(osc(10).rotate(0, -0.1), 1))
	.color(2.83,0.91,0.39)
  .out(o0)


// jumpy swirls
bpm = 135

osc(8,-0.5, 1)
  .color(-1.5, -1.5, -1.5)
  .blend(o0)
  .rotate(-0.5, -0.5)
  .modulate(
	osc(50).kaleid(8)
  	.rotate([0.5, 100], 0.5)
  	.scale(2)
  	.repeatX(2, 2)
  	.modulate(o0, [0.02, 0.05, 0.10, 0.20])
  	.repeatY([1, 2, 3, 4], [8, 6, 4, 2]))
  .scale(1,1,()=>window.innerWidth/window.innerHeight)
  .out(o0)

// jumpy siri
 randomArray = (l=12, scale=1, increment=0) => Array.from(
  {length: l}, () => (Math.random()*scale)+increment);

bpm = 130

osc(20, 0.05, 1)
  .color(0, 1, 2)
  .saturate(randomArray(10, 1, 0))
  .rotate(1.57/2)
  .out(o1)

osc(30, 0.01, 0)
  .color(2, 0.7, 1)
  .modulate(o1, 0)
  .add(o1,1)
  .modulateRotate(o1,2,10)
  .out(o0)


//colourful ghost cam

//s0.initScreen()
//s0.initCam()
src(s0)
  .pixelate(1e5, 50)
  .add(o0, 0.8)
  .out(o2)

osc(50, 0.02, 1).modulateRotate(o2, [1, 2, 3]).out(o3)


// simple osc beat matching with hydra-tap
await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

osc(30, .01, beats(1))
  .posterize(10,1)
  .modulateRotate(osc(10, .02, 1))
  .out()
