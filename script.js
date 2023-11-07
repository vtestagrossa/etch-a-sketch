// Main divs to append/remove children to/from
const outerContainer = document.getElementById('container-border');
const container = document.getElementById('container');
const borderTop = document.getElementById('border-top');
const borderLeft = document.getElementById('cb-left');
const borderRight = document.getElementById('cb-right');
const borderBC = document.getElementById('bc-border');
const borderBL = document.getElementById('bl-border');
const borderBR = document.getElementById('br-border');

let rainbowTgl = false;

// controls
const clearBtn = document.createElement('button');
const rainbowBtn = document.createElement('button');
const drawBtn = document.createElement('button');

drawBtn.classList.add('border-button');
drawBtn.textContent= "Draw";
borderBL.appendChild(drawBtn);

rainbowBtn.classList.add('border-button');
rainbowBtn.textContent = "Rainbow";
borderBL.appendChild(rainbowBtn);

// clearBtn attributes
clearBtn.classList.add('border-button');
clearBtn.textContent = "Clear";
borderBR.appendChild(clearBtn);

// Border attributes
let borderTitle = document.createElement('p');
borderTitle.textContent = "Etch-a-Sketch";
borderTitle.classList.add('title-text');
borderTop.appendChild(borderTitle);

// Slider elements
const sizeSlider = document.createElement('input');
const sizeLabel = document.createElement('p');
sizeLabel.classList.add('border-label');

// Set Slider attributes and append to the bottom border
sizeSlider.setAttribute('id', 'sizeSlider');
sizeSlider.setAttribute('type', 'range');
sizeSlider.setAttribute('min', '16');
sizeSlider.setAttribute('max', '100');
sizeSlider.setAttribute('value', '25');
sizeSlider.classList.add('size-slider');

borderBC.appendChild(sizeSlider);
borderBC.appendChild(sizeLabel);

// Sizing information
const containerSize = 600;
let clicked = false;
let gridSizeX = 50;
let gridSizeY = 50;

/* Event Listeners */
// sizeLabel text and onchange event code
sizeLabel.textContent = "Grid Size: " + gridSizeX;
sizeSlider.addEventListener('change', () => { 
    sizeLabel.textContent = "Grid Size: " + sizeSlider.value;
    gridSizeX = sizeSlider.value;
    gridSizeY = sizeSlider.value;
    clicked = false;
    makeGrid(gridSizeX, gridSizeY);
    });
// clearBtn event listener
clearBtn.addEventListener('click', () => {
    gridSizeX = sizeSlider.value;
    gridSizeY = sizeSlider.value;
    clicked = false;
    makeGrid(gridSizeX, gridSizeY);
})
rainbowBtn.addEventListener('click', () => {
    rainbowBtn.classList.toggle('active');
    rainbowTgl = !rainbowTgl;
});
//Toggles drawing mode
drawBtn.addEventListener('click', () => {
    drawBtn.classList.toggle('active');
    clicked = !clicked;
})


//Allows for selection of colors.
let cellColor = "background-color: rgb(0, 0, 0);";

function makeGrid(sizeX, sizeY){
    removeOldGrid();
    //Allows for selection of grid size
    let cellStyle = "width: " + (containerSize / sizeX) + "px;" + " height: " + (containerSize / sizeY) + "px;";
    //Loop through the rows
    for (let y = 0; y < sizeY; y++){
        //create the div for the row
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        //loop through each "cell"
        for(let x = 0; x < sizeX; x++){
            let gridCell = document.createElement('div');
            gridCell.classList.add('grid-square');
            gridCell.setAttribute('style', cellStyle);
            gridCell.addEventListener('mouseenter', () => {
                //Checks for mousedown before filling the tile
                if (clicked === true){
                    if (rainbowTgl === true){
                        cellColor = randomizeColor();
                    }
                    gridCell.setAttribute("style", cellStyle + cellColor)
                }
            });
            gridRow.appendChild(gridCell);
        }
    }
}
function removeOldGrid(){
    document.querySelectorAll('.grid-row').forEach(function(row){
        row.parentNode.removeChild(row);
    });
}
function randomizeColor(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return "background-color: rgb(" + R + ", " + G + ", " + B + ");";
}
makeGrid(gridSizeX, gridSizeY);