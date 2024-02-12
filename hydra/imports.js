const PERiPERiDEFAULTS = async () => {
  await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
  await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")
  await loadScript("https://cdn.jsdelivr.net/gh/rexmalebka/hydra-threejs@changes/hack/dist/hydra-three.js")
  await loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js")

  const myFont = new FontFace('PressStart', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2');
  await myFont.load();
  document.fonts.add(myFont);

  hydraText.font = "PressStart"
  hydraText.lineWidth = "2%"

  fade_schedule = _.range(0, 1.1, 0.005).concat(_.fill(Array(20), 1));
  const fadeOut = (subject, output) => subject.mult(shape(4).scale(5).color(0,0,0), fade_schedule).out(output)

  document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.altKey && event.metaKey) {
          bpm = 1
      }
  });
}
