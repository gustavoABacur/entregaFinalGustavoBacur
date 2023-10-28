const audioElements = [];
const controlButtons = [];

for (let i = 1; i <= 10; i++) {
  audioElements.push(document.getElementById("mySong" + i));
  controlButtons.push(document.getElementById("icon" + i));
}

let currentlyPlaying = null; 

controlButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const audio = audioElements[index];

    if (audio === currentlyPlaying) {
        if (audio.paused) {
        audio.play();
        button.src = "../assets/img/pause-solid.svg";
      } else {
        audio.pause();
        button.src = "../assets/img/play-solid.svg";
      }
    } else {
   
      if (currentlyPlaying) {
        currentlyPlaying.pause();
        const currentButton = controlButtons[audioElements.indexOf(currentlyPlaying)];
        currentButton.src = "../assets/img/play-solid.svg";
      }

      audio.play();
      button.src = "../assets/img/pause-solid.svg";
      currentlyPlaying = audio;
    }
  });
});



