const squareContainer = document.querySelector(".squares-container");
const changeSizeButton = document.querySelector("button");

createGrid();

function createGrid(gridDimension = 16) {
    // Different ways to empty a div
    squareContainer.replaceChildren();
    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            square.style.width = Math.floor(960 / gridDimension) + "px";
            square.style.height = square.style.width;
            squareContainer.appendChild(square);
        }
    }
}

squareContainer.addEventListener("mouseover", e => {
    if (e.target.matches(".square")) {
        // You can also use the dataset property or hsl
        const brightness = getComputedStyle(e.target).getPropertyValue("filter");
        const regex = /\(([^)]+)\)/;
        const brightnessVal = brightness.match(regex);
        e.target.style.filter = `brightness(${brightnessVal[1] - 0.1})`;
    }
});

changeSizeButton.addEventListener("click", () => {
    let gridDimension;
    do {
        gridDimension = prompt("How many rows of blocks do you want to produce? ");
    } while (gridDimension > 100 || gridDimension < 1)
    // gridDimensionY = prompt("How many columns of blocks do you want to produce? ");
    createGrid(gridDimension);
})