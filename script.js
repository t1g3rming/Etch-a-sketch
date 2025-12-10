let cellColor = "#000000"; // default color

function generateGrid(number){
    let container = document.querySelector(".grid-container");
    container.innerHTML = ""; 

    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            
            let cell = document.createElement("div");
            cell.className = "gridCell";
            cell.style.width = `${500/number}px`;
            cell.style.height = `${500/number}px`;

            if (cellClear === false){ //checks to see if clear button was clicked or not
                cell.addEventListener("mouseover", () => darken(cell, cellColor));
            }else{
                cell.style.backgroundColor = "";
                cellClear = false; //to make sure we can still sketch after clicking clear once
            }

            

            container.appendChild(cell);
        }
    }
}

function darken(cell, color){
    let currOpacity = Number(cell.style.opacity || 0);

    if (currOpacity === 0) {
        cell.style.backgroundColor = color;
    }

    if (currOpacity < 1){
        cell.style.backgroundColor = color;
        cell.style.opacity = currOpacity + 0.1;
    }
}

//clearing function
let cellClear = false;
function clear(number){
    cellClear = true;
    generateGrid(number)
}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var clearBtn = document.querySelector(".button");
var sliderVal = 16; //original value

slider.oninput = function() {
    sliderVal = this.value;
    output.innerHTML = sliderVal;
};

slider.addEventListener("input", function() {
    generateGrid(sliderVal);
});

// Color picker
document.getElementById("color").addEventListener("input", function(){
    cellColor = this.value;
});

clearBtn.addEventListener("click", function(){
    clear(sliderVal);
});