const DEFAULT_DIMENSION = 16;

function makeGrid(container, sideLength) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < sideLength; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < sideLength; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function getDimension() {
    let dim;
    while(isNaN(dim = prompt("Grid dimension to resize to? (max 100)")) || +dim > 100) {}
    return +dim;
}

const grid = document.querySelector("#container");
makeGrid(grid, DEFAULT_DIMENSION);

let eraseBtn = document.querySelector("#erase");
    eraseBtn.addEventListener("click", () => {
    for (const r of grid.children) {
        for (const sq of r.children) {
            sq.style.backgroundColor = "white";
        }
    }
});

let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", () => {
    makeGrid(grid, getDimension());
});

