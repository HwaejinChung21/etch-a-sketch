
let originalPixelNumber = 16;

const gridContainer = document.querySelector(".grid-container");

function drawGrid(pixelNumber) {
    for (let i = 0; i < pixelNumber; i++) {
        for (let j = 0; j < pixelNumber; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid-item");
            let height = 480 / pixelNumber;
            let width = 480 / pixelNumber;
            grid.style.height = `${height}px`;
            grid.style.width = `${width}px`;
            grid.style.border = "1px solid lightgray";
            grid.style.boxSizing = "border-box"
            gridContainer.appendChild(grid);
        }
    }
}

gridContainer.addEventListener("mouseenter", (e) => {
    if (e.target.classList.contains("grid-item")) {
        e.target.style.backgroundColor = "lightblue";
    }
}, true);

function deleteGrid() {
    document.querySelectorAll(".grid-item").forEach(grid => grid.remove());
}


const gridChangeButton = document.querySelector(".pixel-change-button");

gridChangeButton.addEventListener("click", function() {
    let newGridNumber = prompt("Enter the number of pixels you would like (Maximum = 100)");
    if (newGridNumber <= 100) {
        deleteGrid();
        drawGrid(newGridNumber);
    } else {
        secondAskNumber = alert("Please enter a number less than or equal to 100.")
    }

});

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(grid => grid.style.backgroundColor = "white");
});

drawGrid(originalPixelNumber);
