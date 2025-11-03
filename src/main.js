import './style.css'

const shareOn = document.getElementById('share-on');
const shareOff = document.getElementById('share-off');
const authorInfo = document.getElementById('author-info');
const socialInfo = document.getElementById('social-info');

shareOn.addEventListener('click', () => {
    authorInfo.classList.add('hidden');
    socialInfo.classList.remove('hidden');
})

shareOff.addEventListener('click', () => {
    socialInfo.classList.add('hidden');
    authorInfo.classList.remove('hidden');
})