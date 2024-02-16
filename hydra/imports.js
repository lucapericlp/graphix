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

  navigator.requestMIDIAccess()
      .then(onMIDISuccess, onMIDIFailure);

  function onMIDISuccess(midiAccess) {
      console.log(midiAccess);
      var inputs = midiAccess.inputs;
      var outputs = midiAccess.outputs;
      for (var input of midiAccess.inputs.values()){
          input.onmidimessage = getMIDIMessage;
      }
  }

  function onMIDIFailure() {
      console.log('Could not access your MIDI devices.');
  }

  var cc = new Map()

  getMIDIMessage = function(midiMessage) {
      var arr = midiMessage.data
      var side_qualifier = arr[0]
      var index = arr[1]
      console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
      console.log(arr)
      var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0
      // TODO: special logic for "toggle button" MIDI types
      cc[[side_qualifier, index]]=val
  }

  ddj = {
    "LH": cc[[176, 7]],
    "LM": cc[[176, 11]],
    "LL": cc[[176, 15]],
    "LFX": cc[[176, 23]],
    "LSLIDER": cc[[176, 19]],
    "RH": cc[[177, 7]],
    "RM": cc[[177, 11]],
    "RL": cc[[177, 15]],
    "RFX": cc[[182, 24]],
    "RSLIDER": cc[[177, 19]],
    "TFX": cc[[150, 89]],
    "HSLIDER": cc[[182, 31]],
    "LCLUE": cc[[144, 12]],
    "LPLAY": cc[[144, 11]],
    "LBEATSYNC": cc[[144, 88]],
    "RCUE": cc[[145, 12]],
    "RPLAY": cc[[145, 11]],
    "RBEATSYNC": cc[[145, 88]],
  }

}
