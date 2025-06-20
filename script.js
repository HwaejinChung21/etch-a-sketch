
let pixelNumber = 16;

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < pixelNumber; i++) {
    for (let j = 0; j < pixelNumber; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-item");
        gridContainer.appendChild(grid);
    }
}

const grids = document.querySelectorAll(".grid-item");

grids.forEach(grid => {
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "lightblue";
    })
});

const pixelChangeButton = document.querySelector(".pixel-change-button");

pixelChangeButton.addEventListener("click", function() {
    const pixelChange = prompt("Enter the number of pixels you would like (Maximum = 100)");
    pixelNumber = pixelChange;
});