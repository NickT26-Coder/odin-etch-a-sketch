const squareContainer = document.querySelector(".squares-container");

let gridDimension = 16;

for (let i = 0; i < gridDimension; i++) {
    for (let j = 0; j < gridDimension; j++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = Math.floor(960 / gridDimension) + "px";
        square.style.height = square.style.width;
        squareContainer.appendChild(square);
    }
}