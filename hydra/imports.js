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

  //create an array to hold our cc values and init to a normalized value
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
    "LH": [176, 7], // LH
    "LM": [176, 11], // LM
    "LL": [176, 15], // LL
    "LFX": [176, 23], // LFX
    "LSLIDER": [176, 19], // LSLIDER
    "RH": [177, 7], // RH
    "RM": [177, 11], // RM
    "RL": [177, 15], // RL
    "RFX": [182, 24], // RFX
    "RSLIDER": [177, 19], // RSLIDER, 177
    "TFX": [150, 89], // TransitionFX
    "HSLIDER": [182, 31], // Horizontal SLIDER or 63
    "LCLUE": [144, 12], // LCUE
    "LPLAY": [144, 11], // LPLAY
    "LBEATSYNC": [144, 88], // LBeatSync - DO NOT USE
    "RCUE": [145, 12], // RCUE
    "RPLAY": [145, 11], // RPLAY
    "RBEATSYNC": [145, 88], // RBeatSync - DO NOT USE
  }

}
