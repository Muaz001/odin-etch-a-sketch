const container = document.querySelector(".container");
 
for (let i = 0; i < 16; i++) {
    let top_div = document.createElement("div");
    container.appendChild(top_div);

    for (let j = 0; j < 16; j++) { 
        let lower_div = document.createElement("div");
        lower_div.setAttribute("style", "padding: 10px;");
        
        lower_div.addEventListener("mouseover", () => {
            lower_div.style.backgroundColor = "black";
        })
        // lower_div.textContent = "wow";
        top_div.appendChild(lower_div);
    }
}
