const outerContainer = document.getElementById('container-border');
const container = document.getElementById('container');


const containerSize = 600;
let clicked = false;
let gridSizeX = 50;
let gridSizeY = 50;

//Allows for selection of colors.
let RGB = "FF0000;"
let cellColor = "background-color: #" + RGB;

//Allows for selection of grid size
const cellStyle = "width: " + (containerSize / gridSizeX) + "px;" + " height: " + (containerSize / gridSizeY) + "px;";

//Toggles drawing mode
document.addEventListener('mousedown', () => {clicked = !clicked;});

function makeGrid(sizeX, sizeY){
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
                    gridCell.setAttribute("style", cellStyle + cellColor)
                }
            });
            gridRow.appendChild(gridCell);
        }
    }
}
makeGrid(gridSizeX, gridSizeY);