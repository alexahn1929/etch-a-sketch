const NUM_ROWS = 16;
const NUM_COLS = 16;

const container = document.querySelector("#container");
for (let i = 0; i < NUM_ROWS; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < NUM_COLS; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
        row.appendChild(square);
    }
    container.appendChild(row);
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    for (const r of container.children) {
        for (const sq of r.children) {
            sq.style.backgroundColor = "white";
        }
    }
});