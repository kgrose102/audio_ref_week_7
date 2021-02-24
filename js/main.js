// create a module for our project
(() =>{
  // select and work with out audio element
  console.log('fired!');
  // console.log(50/100);

  // Variables at the top

  let theAudio = document.querySelector("audio"),
      controlButtons = document.querySelectorAll("button"),
      albumArt = document.querySelectorAll(".track-ref")

  // functions in the middle
  function loadTrack(){
    // debugger;
    // grab value of the custom data atrribue
    let targetTrack = this.dataset.trackref;

    // load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;

    theAudio.volume = 0.5;

    // load and play the new source
    theAudio.load();
    // theAudio.play();
    // the above function is inside the playTrack function
    playTrack();
  }
  function rewindTrack(){
    // rewind the current track back to the beginning
    theAudio.currentTime = 0;
  }

  function stopTrack(){
    theAudio.pause();
    // "method" and built in to JavaScript
  }

  function playTrack(){
    theAudio.play();
  }


  // event handling at the bottom
  for (cover of albumArt){
    // debugger;
    cover.addEventListener("click", loadTrack);
  }

  // get the play button -> the first element in the collection
  controlButtons[0].addEventListener("click", playTrack);
  controlButtons[1].addEventListener("click", stopTrack);
  controlButtons[2].addEventListener("click", rewindTrack);
})()
