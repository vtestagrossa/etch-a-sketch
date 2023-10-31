const container = document.getElementById('container');
const containerSize = 960;
let clicked = false;
let gridSizeX = 50;
let gridSizeY = 50;
let RGB = "FF0000;"
let cellColor = "background-color: #" + RGB;
const cellStyle = "width: " + (containerSize / gridSizeX) + "px;" + " height: " + (containerSize / gridSizeY) + "px;";

//Allows dragging.
document.addEventListener('mousedown', () => {clicked = true;});
document.addEventListener('mouseup', () => {clicked = false});

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
            gridCell.addEventListener('mousedown', () => {
                clicked = true;
                gridCell.setAttribute("style", cellStyle + cellColor)
            });
            gridCell.addEventListener('mouseup', () => {
                clicked = false;
            });
            gridCell.addEventListener('mouseenter', () => {
                //Checks for mousedown before filling the tile
                if (clicked){
                    gridCell.setAttribute("style", cellStyle + cellColor)
                }
            });
            gridRow.appendChild(gridCell);
        }
    }
}
makeGrid(gridSizeX, gridSizeY);