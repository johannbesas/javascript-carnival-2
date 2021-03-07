// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var holes = [];
var myTable = document.getElementById("myTable");
for (var i = 0; i < myTable.rows.length; i++) {
  for (var j = 0; j < myTable.rows[i].cells.length; j++)
    holes.push(myTable.rows[i].cells[j]);
}

function startGame() {
  var randomIndex = getRandomInt(24);
  var randomCell = holes[randomIndex];
  
  showMole(randomCell);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function showMole(cell) {
  cell.setAttribute("class", "mole");
  cell.setAttribute("onClick", "whackedMole()");
}

function whackedMole() {
  var audio =  new Audio('whack-audio.wav');
  audio.play();
  
  for (var i = 0; i < myTable.rows.length; i++) {
    for (var j = 0; j < myTable.rows[i].cells.length; j++)
      clearMoles(myTable.rows[i].cells[j]);
  }
  startGame();
}

function clearMoles(cell) {
  cell.innerHTML = " "; 
  cell.setAttribute("class", "");
  cell.setAttribute("onClick", "");
}