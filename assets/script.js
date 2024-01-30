let player, winner = null;
const playerSelected = document.getElementById('player-selected');
const winnerSelected = document.getElementById('winner-selected');
const square1 = document.getElementById('1');
const square2 = document.getElementById('2');
const square3 = document.getElementById('3');
const square4 = document.getElementById('4');
const square5 = document.getElementById('5');
const square6 = document.getElementById('6');
const square7 = document.getElementById('7');
const square8 = document.getElementById('8');
const square9 = document.getElementById('9');
const allSquares = document.getElementsByClassName('squareClass');

changePlayer('X');          //mudarJogdor

function squareClick(id) {    //escolherQuadrado
  if (winner !== null) {
    return;
  }

  const square = document.getElementById(id);
  if (square.innerHTML !== '-') {
    return;
  }

  square.innerHTML = player;
  square.style.color = '#000';

  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X'
  };

  changePlayer(player);               //mudarJogador
  checkWinner();                      //checaVencedor
}

function changePlayer(value) {        //mudarJogadpr
  player = value;
  playerSelected.innerHTML = player;
}

function checkWinner() {                          //checaVencedor
  if (checkSequence(square1, square2, square3)) { //checaSequencia
    changeSquareColor(square1, square2, square3); //mudaCorQuadrado
    changeWinner(square1);                         //mudaCencedor
    return;
  }
  if (checkSequence(square4, square5, square6)) {
    changeSquareColor(square4, square5, square6);
    changeWinner(square4);
    return;
  }
  if (checkSequence(square7, square8, square9)) {
    changeSquareColor(square7, square8, square9);
    changeWinner(square8);
    return;
  }
  if (checkSequence(square1, square4, square7)) {
    changeSquareColor(square1, square4, square7);
    changeWinner(square7);
    return;
  }
  if (checkSequence(square2, square5, square8)) {
    changeSquareColor(square2, square5, square8);
    changeWinner(square2);
    return;
  }
  if (checkSequence(square3, square6, square9)) {
    changeSquareColor(square3, square6, square9);
    changeWinner(square3);
    return;
  }
  if (checkSequence(square1, square5, square9)) {
    changeSquareColor(square1, square5, square9);
    changeWinner(square9);
    return;
  }
  if (checkSequence(square3, square5, square7)) {
    changeSquareColor(square3, square5, square7);
    changeWinner(square5);
  }
};

function changeWinner(square) {   //mudarVencedor
  winner = square.innerHTML;
  winnerSelected.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3) {   //mudaCorQuadrado
  square1.style.background = '#0f0';
  square2.style.background = '#0f0';
  square3.style.background = '#0f0';
};

function checkSequence(square1, square2, square3) {   //checaSequencia
  let sequenceOfThree = false;

  if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
    sequenceOfThree = true;
  }
  return sequenceOfThree;
};

function reset() {    //reiniciar

  winner = null;
  winnerSelected.innerHTML = '';

  for(let i =1; i <= 9; i++ ) {

    let squareDiv = document.getElementById(i);
    squareDiv.style.background = '#eee';
    squareDiv.style.color = '#eee';
    squareDiv.innerHTML = '-'
  }
  changePlayer('X');    //mudaJogador
}