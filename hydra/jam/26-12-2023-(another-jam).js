await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

bpm = 127

//second one
osc(5, 0.2, beats(-1)).rotate([1, 2, 3])
  .modulateRepeat(
    osc([5, 8, 11])
      .color(1.2, 1.2, 1.2))
  .modulateRotate(noise(beats(1)()*10))
  .contrast(-0.3)
  .out(o2)

//first one
osc(10, 0.05, beats_(1))
.modulateRepeat(osc([2, 4, 8, 16, 32]),1, 2, 4, 3)
.modulateRotate(osc([1, 2, 4, 8, 16, 32], 0.1, 1))
.modulateKaleid(osc(1,0.05,0),1)
.scrollX(4, 0.1)
.luma (0.4)
.rotate(1, 0.2, 0)
.scale(1.2)
//.out(o1)

//optional combination of two sketches to finish set
.mult(o2).out(o3)

render(o3)
