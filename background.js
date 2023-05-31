var video = document.getElementById("myVideo");
video.addEventListener("loadeddata", function() {
  fadeIn();
});

video.addEventListener("timeupdate", function() {
  if (video.currentTime >= video.duration - 1) {
    fadeOut();
  } else if (video.currentTime <= 1) {
    fadeIn();
  }
});

function fadeIn() {
  video.style.opacity = 1;
}

function fadeOut() {
  video.style.opacity = 0;
}