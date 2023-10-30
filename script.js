const container = document.getElementById('container');

let gridSizeX = 16;
let gridSizeY = 16;
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
            gridRow.appendChild(gridCell);
        }
    }
}
makeGrid(gridSizeX, gridSizeY);