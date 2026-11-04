const boardElement = document.getElementById('board');

//Renders the grid to the page
function render(grid) {
  boardElement.innerHTML = '';
  boardElement.style.setProperty('--cols', grid[0].length);
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const cell = document.createElement('div');
      cell.className = grid[r][c] === 1 ? 'cell alive' : 'cell';
      boardElement.appendChild(cell);
    }
  }
}

const ROWS = 10;
const COLS = 10;
let grid; 

function generateRandomGrid(){
let grid = []
// Loop from 1-10, and
//in each turn create a new array (row)
//and the new row to the grid
for (let i = 0; i<10; i++){
  let row = []
  //Loop from 1-10
  //in each turn and 0 to the row
  for (let j = 0; j<10; j++){
    //Generate a random number
    //Math.random() generates a random number 0-1
    //if random number is larger than 0.7, add 1 to row
    //else add 0
    let change = Math.random()
    let cell = 0
    if(change >= 0.7){
      cell = 1
    }
      row.push(cell)
  }

  //add the filled row to the grid
  grid.push(row)
}
return grid;
}
function calculateAliveNeighbors(row, column){
  const rowOffsets = [-1, -1, -1, 0, 0, 1, 1, 1]
  const columnOffsets = [-1, 0, 1, -1, 1, -1, 0, 1]
  let alive = 0
  for (let i = 0; i<rowOffsets.length; i++){
    let neighborRow = row + rowOffsets[i]
    let neighborColumn = column + columnOffsets[i]

    let rowInGrid = (neighborRow >= 0) && (neighborRow<10)
    let columnInGrid = (neighborColumn >= 0) && (neighborColumn<10)


    if (rowInGrid && columnInGrid){
    let neighbor = grid[neighborRow][neighborColumn]
    alive += neighbor
  }
}
return alive

}
function generateNextGeneration(grid){
  let nextGeneration = []
  for(let i = 0; i<10;i++){
    for (let j = 0; j<10; j++){
      let cell = grid[i][j]
      let aliveNeighbors = calculateAliveNeighbors(i,j)
      let nextCell = 0
      if ((cell == 0) && (aliveNeighbors == 3)){
        nextCell = 1
      }
      else if ((cell == 1) && (aliveNeighbors == 2)){
        nextCell = 1
      }
      else if ((cell == 1) && (aliveNeighbors == 3)){
        nextCell = 1
      }
      nextGenRow[j] = nextCell
    }
    nextGeneration.push(nextGenRow)
  }
  grid = nextGeneration
}

function step(){
  generateNextGeneration()
  render(grid)
}

grid = generateRandomGrid()

generateNextGeneration(grid)

render(grid)

timerId = setInterval(step, 200)