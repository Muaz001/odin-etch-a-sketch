// Making the grid functional
const container = document.querySelector(".container");

function createGrid(size) {
    let outer = document.querySelector(".outer");
    let statement = document.createElement("p");
    statement.textContent = "Try swiping the cursor below!"
    outer.insertBefore(statement, container);

    for (let i = 0; i < size; i++) {
        let top_div = document.createElement("div");
        container.appendChild(top_div);

        for (let j = 0; j < size; j++) { 
            let lower_div = document.createElement("div");
            boxSize = 160 / size;
            lower_div.setAttribute("style", `padding: ${boxSize}px;`);
            
            lower_div.addEventListener("mouseover", () => {
                lower_div.style.backgroundColor = "black";
            })
            top_div.appendChild(lower_div);
        }
    }
}

// Making the button functional
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let getSize = prompt("Enter a number of squares for each side: ");
    gridSize = Number(getSize);
    if (gridSize > 3 && gridSize <= 100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
        
        document.createElement("p")
    }
    else {
        alert("Please enter a size between 3 and 100.");
    }
})
