var tictactoe = function() {
  var whoseTurnIsIt = 'X';
  var board = ['_','_','_','_','_','_','_','_','_','_',]
  var displayer='';
  var movesSoFar = 1;
  var displayBoard = function() {
    var printMe='';
    displayer = '';
    for (var i = 0; i < 9; i++) {
      printMe += board[i];
      if ((i-2)%3 !== 0) {
        printMe += '|'
      }
      if ((i-2)%3 === 0) {
        displayer += printMe + '\n';
        console.log(printMe);
        printMe = '';
      }
    }
  }
  var goAgain = function(){
    var nextMove = prompt(`${displayer} Where do you want to go, ${whoseTurnIsIt}? Answer in the form [x,y], from [1,1] to [3,3]`);
    where = [parseInt(nextMove.split('')[1]), parseInt(nextMove.split('')[3])];
    var makeAMove = function(positionArray){
      var whereToPlace = positionArray[0]-1 + (positionArray[1]-1)*3;
      if (board[whereToPlace] === '_') {
        board[whereToPlace] = whoseTurnIsIt;
      } else {
        alert(`That's already occupied. TURN FORFEITED`);
      }
      displayBoard();
    }
    var checkIfWon = function() {
      movesSoFar++;
      var wonYet = false;
      for (var i = 0; i < 3; i++){
        //verticals
        if (board[i] === board[i+3] && board[i] === board[i+6] && board[i] !== '_') {
          wonYet = true;
        }
        if (board[0] === board[1] && board[0] === board[2] && board[0] !== '_') {
          wonYet = true;
        }
        if (board[3] === board[4] && board[3] === board[5] && board[3] !== '_') {
          wonYet = true;
        }
        if (board[6] === board[7] && board[6] === board[8] && board[6] !== '_') {
          wonYet = true;
        }
        if (board[0] === board[4] && board[0] === board[8]  && board[0] !== '_') {
          wonYet = true;
        }
        if (board[2] === board[4] && board[2] === board[6]  && board[2] !== '_') {
          wonYet = true;
        }
      }
      if (!wonYet) {
          if (whoseTurnIsIt === 'X') {
          whoseTurnIsIt = 'O';
        } else {
          whoseTurnIsIt = 'X';
        }
        goAgain();
      } else if (movesSoFar === 9) {
        console.log(`It's a tie!`);
      } else {
        alert(`Congratulations, ${whoseTurnIsIt}!`);
      }
    }
    console.log(where);
    makeAMove(where);
    checkIfWon();
  }
  goAgain();
}

tictactoe();