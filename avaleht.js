
// https://codepen.io/bloom-dan/pen/JevGxR
const image = document.querySelector(".tilt");
// lisab kuulaja pildile iga hiire liigutus peale
document.addEventListener("mousemove", event => {
    // võtab pildi koordinaadid
    const { top, bottom, left, right } = image.getBoundingClientRect();
    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;
    // võtab hiire koordinaadid
    const clientX = event.clientX;
    const clientY = event.clientY;
    // arvutab koordinaadid pildi jaoks kasutades hiire koordinaate
    const offsetX = (clientX - left - middleX) / middleX;
    const offsetY = (top + middleY - clientY) / middleY;
    // lisab koordinaadid pildile
    image.style.transform = `perspective(1000px) rotateY(${offsetX * 5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
});