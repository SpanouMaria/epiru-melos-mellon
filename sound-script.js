const sounds = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3'];

function getNextSound() {
    let pool = JSON.parse(sessionStorage.getItem('soundPool'));

    if (!pool || pool.length === 0) {
        pool = [...sounds].sort(() => Math.random() - 0.5);
    }

    const selectedSound = pool.pop();
    sessionStorage.setItem('soundPool', JSON.stringify(pool));
    return selectedSound;
}

const dropBtn = document.getElementById('soundButton');
let currentAudio = null;

const lockedSound = getNextSound();
currentAudio = new Audio(lockedSound);
currentAudio.loop = true;

dropBtn.addEventListener('click', () => {
    if (currentAudio.paused) {
        currentAudio.play();
        dropBtn.textContent = "🔊"; 
    } else {
        currentAudio.pause();
        dropBtn.textContent = "💧"; 
    }
});
