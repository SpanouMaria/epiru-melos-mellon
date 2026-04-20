const btn = document.getElementById('audioBtn');
const modal = document.getElementById('audioModal');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
