await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

bpm = 134
interval = false

// default sketch, cool for fading objects
/*shape(1,1)
  .mult(voronoi(5,2)
  .blend(o0).luma())
  .add(shape(3,0.3)
       .rotate(1,1)
       .mult(voronoi(600,1).luma())
       .rotate(1.5))
  //.scrollX([0.1,-0.0625,0.005,0.00001], 0)
  //.scrollY([0.1,-0.0625,0.005,0.00001], 0)
  .out()*/

osc(10, 0.01, 1)
  .modulate(voronoi(600, 1).scale(30).luma().kaleid(), 0.9)
  .modulateRotate(osc(1, 0.5, 1))
  .diff(src(o0).rotate(interval ? 0 : [1, 2, 3, 2]), 1.0)
  .out()
