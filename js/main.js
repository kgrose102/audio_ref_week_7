// create a module for our project
(() =>{
  // select and work with out audio element
  console.log('fired!');

  // Variables at the top

  let theAudio = document.querySelector("audio"),
      playButton = document.querySelector("button"),
      albumArt = document.querySelectorAll(".track-ref")

  // functions in the middle
  function playTrack(){
    // debugger;
    // grab value of the custom data atrribue
    let targetTrack = this.dataset.trackref;

    // load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;

    // theAudio.volume = 0.5;

    // load and play the new source
    theAudio.load();
    theAudio.play();
  }

  // event handling at the bottom
  for (cover of albumArt){
    // debugger;
    cover.addEventListener("click", playTrack);
  }
})()
