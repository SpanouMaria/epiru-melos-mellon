let currentAudio = null; 
let pool = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3'];
let queue = [];

function toggleSound() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        return; 
    }
    
    if (queue.length === 0) queue = [...pool].sort(() => Math.random() - 0.5);
    const soundFile = queue.pop();
    
    currentAudio = new Audio(soundFile);
    currentAudio.loop = true; 
    currentAudio.preload = "auto"; 
    
    currentAudio.play();
}

document.getElementById('soundButton').addEventListener('click', toggleSound);
