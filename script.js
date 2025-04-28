// Definingeach element or class
const lightboxContainer = document.getElementById('lightbox-container');
const lightbox = document.getElementsByClassName('lightbox')[0];
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxImg = document.getElementById('lightbox-img');
const x = document.getElementById('x');

// For each item (work), the image gets an on click setting the lightbox content by accessing the data- attributes in the html
// Additionally  makes the lightbox and container display, whilst adding no scroll to the body so it doesn't scroll with the lightbox
document.querySelectorAll('.item').forEach(img => {
    img.addEventListener('click', () => {
        lightboxTitle.textContent = img.dataset.title;
        lightboxDesc.innerHTML = img.dataset.desc;
        lightboxImg.src = img.dataset.img;
        lightboxContainer.style.display = 'flex';
        lightbox.style.display = 'block';
        document.body.classList.add('no-scroll');
    });
});

//Allows clicking the x to dismiss the lightbox and reset the img src and removing the no-scroll class from the body
x.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
    lightboxImg.src = '';
    document.body.classList.remove('no-scroll');
})

//Allows clicking on the lightbox container to dismiss the lightbox itself
lightboxContainer.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
    lightboxImg.src = '';
    document.body.classList.remove('no-scroll');
});

//Makes it so clicking on the lightbox doesn't dismiss it, as inherently it acts as if the click were on the lightbox container
lightbox.addEventListener('click', (event) => {
    event.stopPropagation();
})

//Allows clicking escape to dismiss the lightbox
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightboxContainer.style.display = 'none';
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        document.body.classList.remove('no-scroll');
    }
});