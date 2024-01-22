bpm = 140

s0.initCam()

src(s0)
  .saturate(2)
  .contrast(1.3)
  .layer(
  	src(o0)
  	.mask(
      shape(6,2.5)
      .scale(0.4,0.7)
      .rotate([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]))
  	.scrollX(0.001))
  // more energy
  //.modulate(o0,0.004)
  .out(o0)


// second, not rhythm friendly
shape(99,.15,.5).color(0,1,2)

.diff( shape(240,.5,0).scrollX(.05).rotate( ()=>time/10 ).color(1,0,.75) )
.diff( shape(99,.4,.002).scrollX(.10).rotate( ()=>time/20 ).color(1,0,.75) )
.diff( shape(99,.3,.002).scrollX(.15).rotate( ()=>time/30 ).color(1,0,.75) )
.diff( shape(99,.2,.002).scrollX(.20).rotate( ()=>time/40 ).color(1,0,.75) )
.diff( shape(99,.1,.002).scrollX(.25).rotate( ()=>time/50 ).color(1,0,.75) )

.modulateScale(
  shape(240,.5,0).scrollX(.05).rotate( ()=>time/10 )
  , ()=>(Math.sin(time/3)*.2)+.2 )

.scale(1.6,.6,1)
.out()

