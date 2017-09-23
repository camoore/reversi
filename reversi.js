/** The state of the game */
var state = {
  over: false,
  turn: 'b',
  board: [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, 'w', 'b', null, null, null],
    [null, null, null, 'b', 'w', null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
  ],
  score: {w: 2, b: 2}
}
function nextTurn() {
  if(state.turn === 'b') state.turn = 'w';
  else state.turn = 'b';

}
function updateScore(){

}

function handleClick(event) {
  event.preventDefault();
  var parentId = event.target.parentElement.id;
  var x = parseInt(event.target.id.charAt(7));
  var y = parseInt(event.target.id.charAt(9));
  var location = event.target.id;
  console.log(event.target.parentElement.id);
  if(parentId.charAt(0) == 's') return;
  var piece = document.createElement('div');
  piece.classList.add('piece');
  piece.classList.add('piece-' + state.turn);
  event.target.appendChild(piece);
  event.target
  nextTurn();
  document.getElementById('score-board').remove();
  console.log(x + " " + y);
  createScoreBoard();
}




function createScoreBoard(){
  var score = document.createElement('div');
  score.id = 'score-board';
  document.body.appendChild(score);
  var turn = document.createElement('p');
  turn.id = 'turn';
  switch(state.turn){
    case 'w':
      turn.innerHTML = "White's turn";
      break;
    case 'b':
      turn.innerHTML = "Black's turn";
  }
  score.appendChild(turn);

  /*
  var whiteScore = document.createElement('p');
  whiteScore.id = 'ws';
  whiteScore.innerHTML = "White: " + state.score.w;
  score.appendChild(whiteScore);
  var blackScore = document.createElement('p');
  blackScore.id = 'ws';
  blackScore.innerHTML = "Black: " + state.score.b;
  score.appendChild(blackScore);
  */
}

function highlightLegalMoves(){

}

function setup() {
  var board = document.createElement('section');
  board.id = 'game-board';
  document.body.appendChild(board);
  for(var y = 0; y < state.board.length; y++){
    for(var x = 0; x < state.board[y].length; x++){
      var square = document.createElement('div');
      square.id = "square-" + x + "-" + y;
      square.classList.add('square');
      board.appendChild(square);
      square.onclick = handleClick;

      //Add pieces to board
      if(state.board[y][x]) {
        var piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add('piece-' + state.board[y][x]);

        square.appendChild(piece);

      }
    }

  }
  createScoreBoard();
}
setup();
