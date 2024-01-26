bpm = 100

await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

osc([7, 14, 21, 14], 0.8, beats_(4)).sub(src(o0).rotate(1)).posterize(10, 10).out()
