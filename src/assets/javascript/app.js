document.addEventListener('mousemove', ({ offsetX, offsetY }) => {
    const body = document.querySelector('body');
    const kkkmote = document.createElement('span'); 
    const size = Math.random() * 40;
    const transform = Math.random() * 360;
    kkkmote.style.left = `${offsetX}px`;
    kkkmote.style.top = `${offsetY}px`;
    kkkmote.style.width = `${20 + size}px`;
    kkkmote.style.height = `${20 + size}px`;
    kkkmote.style.transform = `rotate(${transform}deg)`;
    body.appendChild(kkkmote);
    setTimeout(() => {
        kkkmote.remove();
    }, 1000);
}); 