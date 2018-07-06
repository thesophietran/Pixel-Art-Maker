// test
// alert("CONNECTED!");
// Select color input
let colorInput = document.querySelector("#colorPicker");

// Select size input
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
let sizePicker = document.querySelector("#sizePicker");
let canvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event) { 
    event.preventDefault();
    // clear previous grid
    canvas.innerHTML = "";  
    makeGrid();
};

function makeGrid() {
    for (var r = 0; r < height.value; r++) {
        var row = canvas.insertRow(r); 
        for (var c = 0; c < width.value; c++) {
            var cell = row.insertCell(c);
            cell.addEventListener("click", fillGrid); 
        }
    }
}

function fillGrid() {
    this.style.backgroundColor = colorInput.value; 
}
