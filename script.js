const tileContainer = document.querySelector('.tile-container');
const endTile = document.getElementById('end-tile');
const resetButton = document.getElementById('reset-button');
const livesRemaining = document.getElementById('lives-remaining');

const numPairs = 5;
let totalLives = 3;
let currentTileIndex = 0;

function updateLivesDisplay() {
  livesRemaining.textContent = totalLives;
}

function generateTiles(numPairs) {
    for (let i = 0; i < numPairs; i++) {
    const correctTile = document.createElement('div');
    const incorrectTile = document.createElement('div');

    correctTile.className = 'tile';
    incorrectTile.className = 'tile';

    correctTile.dataset.correct = 'true';
    incorrectTile.dataset.correct = 'false';

    if (Math.random() < 0.5) {
      tileContainer.appendChild(correctTile);
      tileContainer.appendChild(incorrectTile);
    } else {
      tileContainer.appendChild(incorrectTile);
      tileContainer.appendChild(correctTile);
    }
  }
}


function resetGame() {
  currentTileIndex = 0;
  tileContainer.innerHTML = '';
  generateTiles(numPairs);
  totalLives = 3; // Reset the lives when the game is reset.
  updateLivesDisplay();
  endTile.style.pointerEvents = 'none';
  endTile.style.backgroundColor = '';
}

function handleTileClick(event) {
  const tile = event.target;
  if (!tile.classList.contains('tile')) return;

  const tileIndex = Array.from(tileContainer.children).indexOf(tile);
  const currentPairStartIndex = currentTileIndex * 2;

  if (tileIndex < currentPairStartIndex || tileIndex > currentPairStartIndex + 1) {
    return; // Ignore clicks on tiles not in front of the player
  }

  const isCorrect = tile.dataset.correct === 'true';

  if (isCorrect) {
    tile.classList.add('correct');
    currentTileIndex++;
    if (currentTileIndex === numPairs) {
      endTile.style.pointerEvents = 'auto';
      endTile.style.backgroundColor = 'yellow';
    }
  } else {
    tile.classList.add('incorrect');
    totalLives--;
    updateLivesDisplay();
    if (totalLives === 0) {
      resetGame();
      alert('Game Over!');
    } else {
      // Reset only the 'incorrect' and 'correct' classes, not the whole game.
      setTimeout(() => {
        tileContainer.querySelectorAll('.incorrect').forEach(el => el.classList.remove('incorrect'));
        tileContainer.querySelectorAll('.correct').forEach(el => el.classList.remove('correct'));
        currentTileIndex = 0;
      }, 1000);
    }
  }
}

function handleEndTileClick() {
  if (currentTileIndex === numPairs) {
    alert('Congratulations! You have reached the finish line.');
    resetGame();
  }
}

tileContainer.addEventListener('click', handleTileClick);
endTile.addEventListener('click', handleEndTileClick);
resetButton.addEventListener('click', resetGame);

resetGame();
