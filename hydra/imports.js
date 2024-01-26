const PERiPERiDEFAULTS = async () => {
  await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
  await loadScript("https://hyper-hydra.glitch.me/hydra-tap.js")

  const myFont = new FontFace('PressStart', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2');
  await myFont.load();
  document.fonts.add(myFont);
  
  hydraText.font = "PressStart"
  hydraText.lineWidth = "2%"
}
