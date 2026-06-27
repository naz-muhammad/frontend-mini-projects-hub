const updateColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
};

const boxes = document.querySelectorAll(".box");

setInterval(() => {
    boxes.forEach((box) => {
        box.style.backgroundColor = updateColor();
        box.style.color = updateColor();
    });
}, 1000);