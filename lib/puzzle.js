// todo
document.querySelector("#show-hint").addEventListener("click", (e) => {
    document.querySelector(".hint").classList.toggle("active");
});

const isNextToEmpty = (tile, emptyTile) => {
    const selectedTileColumn = tile.cellIndex;
    // console.log(selectedTileColumn);
    const selectedTileRow = tile.parentElement.rowIndex;
    // console.log(selectedTileRow);
    
    // console.log(emptyTile);
    const emptyTileColumn = emptyTile.cellIndex;
    // console.log(emptyTileColumn);
    const emptyTileRow = emptyTile.parentElement.rowIndex;
    // console.log(emptyTileRow);
    // console.log(emptyTileRow === selectedTileRow);
    // //console.log(emptyTileColumn === selectedTileColumn);
    // console.log((emptyTileColumn - selectedTileColumn) === 1);
    //console.log((emptyTileColumn - selectedTileColumn) === -1);
    const sameRow = emptyTileRow === selectedTileRow;
    const sameColumn = emptyTileColumn === selectedTileColumn;
    return (sameRow && (emptyTileColumn - selectedTileColumn) === 1) ||
    (sameRow && (emptyTileColumn - selectedTileColumn) === -1) ||
    (sameColumn && (emptyTileRow - selectedTileRow) === 1) ||
    (sameColumn && (emptyTileRow - selectedTileRow) === -1)

};


// get all tiles
const tiles = document.querySelectorAll("td");
console.log(tiles);
// add an event listener to each
tiles.forEach((tile) => {
    // on click:
    tile.addEventListener("click", (e) => {
        console.log(e);
        //console.log(e.currentTarget);
        // check if they're next to the empty tile
        const emptyTile = document.querySelector(".empty");
        console.log(isNextToEmpty(e.currentTarget, emptyTile));
        if (isNextToEmpty(e.currentTarget, emptyTile)) {
            // if they are, move the value of the selected tile to the empty tile, and replace it's number with the empty tile
            emptyTile.innerText = e.currentTarget.innerText;
            e.currentTarget.innerText = "";
            emptyTile.classList.remove("empty");
            e.currentTarget.classList.add("empty");
            // check if the tiles are in  the right order. 
            const tilesOrder = Array.from(document.querySelectorAll("td")).map(t => t.innerHTML);
            console.log(tilesOrder);
            const correctOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];
            if (tilesOrder.join() === correctOrder.join()) {
                alert("Well done, you solved it!");
            }
            // if they are, congratulate the user!
        }
    });
});

