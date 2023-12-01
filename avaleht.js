const image = document.querySelector(".tilt");

document.addEventListener("mousemove", event => {
    const { top, bottom, left, right } = image.getBoundingClientRect();
    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX;
    const clientY = event.clientY;

    const offsetX = (clientX - left - middleX) / middleX;
    const offsetY = (top + middleY - clientY) / middleY;

    image.style.transform = `perspective(1000px) rotateY(${offsetX * 5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
});