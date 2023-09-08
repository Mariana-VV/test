const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const imagesEl = document.querySelectorAll('img');
imagesEl.forEach(image => {
    image.addEventListener('click', event =>{
        lightbox.classList.add('active');
        const imgEl = document.createElement('img');
        imgEl.src = image.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(imgEl);
    })
});

lightbox.addEventListener('click',event =>{
    if(event.target !== event.currentTarget){
        return;
    }
    lightbox.classList.remove('active');
})