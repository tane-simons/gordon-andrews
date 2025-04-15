const lightboxContainer = document.getElementById('lightbox-container');
const lightbox = document.getElementsByClassName('lightbox')[0];
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxImg = document.getElementById('lightbox-img');
const x = document.getElementById('x');

document.querySelectorAll('.item').forEach(img => {
    img.addEventListener('click', () => {
        lightboxTitle.textContent = img.dataset.title || '';
        lightboxDesc.textContent = img.dataset.desc || '';
        lightboxImg.src = img.dataset.img;
        lightboxContainer.style.display = 'flex';
        lightbox.style.display = 'grid';
        document.body.classList.add('no-scroll');
    });
});

x.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
    lightboxImg.src = '';
    document.body.classList.remove('no-scroll');
})

lightboxContainer.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
    lightboxImg.src = '';
    document.body.classList.remove('no-scroll');
});

lightbox.addEventListener('click', (event) => {
    event.stopPropagation();
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightboxContainer.style.display = 'none';
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        document.body.classList.remove('no-scroll');
    }
});