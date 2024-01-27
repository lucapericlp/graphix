bpm = 143
title_alpha = [1, 0, 1, 0, 0, 0, 0, 0]
title_ii_alpha = [0, 0, 0, 0, 1, 0, 1, 0]

title_i = "TWO STEP \n VERIFICATION"
title_ii = "FEATURING\n DJ PERiPERi"


solid(1, 0.1)
	.blend(src(o0)
		.scale(1.02)
		.colorama(.02))
	.layer(
		text(title_i)
		.color(1, 1, 1, title_alpha)
	)
	.layer(
		strokeText(title_i)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_alpha)
	)
	.layer(
  		text(title_ii)
  		.color(1,1,1, title_ii_alpha)
  	)
	.layer(
		strokeText(title_ii)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_ii_alpha)
	)
	.out()

/////// halfed bpm & added modulateRotate

bpm = 71.5
title_alpha = [1, 0, 1, 0, 0, 0, 0, 0]
title_ii_alpha = [0, 0, 0, 0, 1, 0, 1, 0]

title_i = "TWO STEP \n VERIFICATION"
title_ii = "FEATURING\n DJ PERiPERi"


solid(1, 0.1)
	.blend(src(o0)
		.scale(1.02)
		.colorama(.02))
	.layer(
		text(title_i)
		.color(1, 1, 1, title_alpha)
  		.modulateRotate(osc(1))
	)
	.layer(
		strokeText(title_i)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_alpha)
  	  	.modulateRotate(osc(1))
	)
	.layer(
  		text(title_ii)
  		.color(1,1,1, title_ii_alpha)
  	)
	.layer(
		strokeText(title_ii)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_ii_alpha)
	)
	.out()


// final touches
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

const myFont = new FontFace('PressStart', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2');
await myFont.load();
document.fonts.add(myFont);

hydraText.font = "PressStart"
hydraText.lineWidth = "2%"

bpm = 71.5
title_alpha = [1, 0, 1, 0, 0, 0, 0, 0]
title_ii_alpha = [0, 0, 0, 0, 1, 0, 1, 0]

title_i = "TWO STEP\nVERIFICATION"
title_ii = "FEATURING\nPERiPERi"

config_ii = {
  font: "PressStart",
  fontStyle: "normal",
  fontSize: "55rem",
  textAlign: "center",
  fillStyle: "white",
  strokeStyle: "white",
  lineWidth: "2%",
  lineJoin: "miter",
  canvasResize: 2,
  interpolation: "linear"
}

solid(1, 0.1)
	.blend(src(o0)
		.scale(1.02)
		.colorama(.02))
	.layer(
		text(title_i)
		.color(1, 1, 1, title_alpha)
  		.modulateRotate(osc(1))
	)
	.layer(
		strokeText(title_i)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_alpha)
  	  	.modulateRotate(osc(1))
	)
	.layer(
  		text(title_ii, config_ii)
  		.color(1,1,1, title_ii_alpha)
  	)
	.layer(
		strokeText(title_ii, config_ii)
		.scale(1.05)
		.colorama(0.8)
		.color(1, 1, 1, title_ii_alpha)
	)
	.out()
