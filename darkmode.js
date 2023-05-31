const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');
const videoElement = document.getElementById('myVideo');

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    videoElement.src = 'assets/background-dark2.mp4';
    loadParticlesConfig('particles-darkmode.json');
  } else {
    body.classList.remove('dark-mode');
    videoElement.src = 'assets/background.mp4';
    loadParticlesConfig('particles.json');  
  }
});

function loadParticlesConfig(configFile) {
  particlesJS.load('particles-js', configFile, function() {
    console.log('Particles.js loaded!');
  });
}
