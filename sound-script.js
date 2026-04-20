const sounds = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3'];
let pool = [];

function playRandomSound() {
    if (pool.length === 0) {
        pool = [...sounds]; 
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedSound = pool.splice(randomIndex, 1)[0];
    
    const audio = new Audio(selectedSound);
    audio.play();
}

document.getElementById('soundButton').addEventListener('click', playRandomSound);
