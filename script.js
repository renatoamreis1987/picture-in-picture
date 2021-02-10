const videoEl = document.getElementById("video");
const buttonEl = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    // Catch Error Here
    console.log("Whoops, error here:", err);
  }
}

buttonEl.addEventListener("click", async () => {
  // Disable Button
  buttonEl.disabled = true;
  // Start Picture in Picture
  await videoEl.requestPictureInPicture();
  // Reset Button
  buttonEl.disabled = false;
});

// On Load
selectMediaStream();
