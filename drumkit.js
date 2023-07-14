
let currentAudio = null; // Global variable to keep track of the currently playing audio
        
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


    if (currentAudio) {
        currentAudio.pause(); // Pause the currently playing audio
        currentAudio.currentTime = 0; // Reset the playback position
        currentAudio = null; // Clear the reference to the previous audio
    }

    audio.play();
    currentAudio = audio; // Update the reference to the currently playing audio

    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);