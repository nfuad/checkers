// Viewports for devices
const breakpoints = {
  small: 700,
  smaller: 500,
  smallest: 400,
}

// Helper function for media queries
const mq = bp => `@media (max-width: ${breakpoints[bp]}px)`

// styles for whole chekerboard
const checkerboard = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [mq('small')]: {
    flexDirection: 'column',
  },
}

// styles for each row
const checkerboardRow = {
  display: 'flex',
}

// styles for individual board square
const boardSquare = isEvenPosition => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  width: 60,
  backgroundColor: isEvenPosition ? '#121' : 'aliceblue',
  [mq('small')]: {
    height: 50,
    width: 50,
  },
  [mq('smaller')]: {
    height: 30,
    width: 30,
  },
  [mq('smallest')]: {
    height: 25,
    width: 25,
  },
})

// styles for ordinary checker
const regularChecker = color => ({
  height: 45,
  width: 45,
  borderRadius: '50%',
  backgroundColor: color,
  cursor: 'pointer',
  [mq('small')]: {
    height: 30,
    width: 30,
  },
  [mq('smaller')]: {
    height: 20,
    width: 20,
  },
  [mq('smaller')]: {
    height: 15,
    width: 15,
  },
})

// styles for a kinged checker
const kingedChecker = color => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  width: 40,
  borderRadius: '50%',
  border: `5px solid ${color}`,
  color: color,
  fontWeight: 'bold',
  fontSize: 17,
  transform: 'rotate(-90deg)',

  [mq('small')]: {
    height: 22,
    width: 22,
    fontSize: 12,
  },

  [mq('smaller')]: {
    height: 15,
    width: 15,
  },

  [mq('smallest')]: {
    height: 10,
    width: 10,
    border: `2px solid ${color}`,
  },
})

// styles for the players' scoreboard
const playerScoreboard = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0px 20px',
  [mq('small')]: {
    flexDirection: 'row',
    margin: '20px 0px',
  },
}

// styling for the players' names
const playerName = (playerTurn, player, color) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  width: 50,
  borderRadius: 15,
  border: playerTurn === player ? `5px solid ${color}` : '5px solid #111',
  color: playerTurn === player ? color : '#111',
  background: playerTurn === player ? '#111' : color,
  marginBottom: '10px',
  [mq('small')]: {
    height: 40,
    width: 40,
    margin: '0px 10px 0px',
    borderRadius: 10,
  },
  [mq('smaller')]: {
    height: 35,
    width: 35,
    margin: '0px 10px 0px',
    borderRadius: 7,
    border: `2.5px solid ${color}`,
  },
  [mq('smallest')]: {
    height: 30,
    width: 30,
    margin: '0px 10px 0px',
    borderRadius: 5,
    border: `2px solid ${color}`,
  },
})

// styles for the players' score
const playerScore = {
  display: 'flex',
  width: 80,
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  [mq('small')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    width: 'inherit',
  },
}

// styles for the players' captured checker
const capturedChecker = {
  marginBottom: '5px',
  width: 30,
  height: 30,
  border: '2px solid #111',
  [mq('small')]: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
}

export {
  checkerboard,
  checkerboardRow,
  boardSquare,
  regularChecker,
  kingedChecker,
  playerScoreboard,
  playerName,
  playerScore,
  capturedChecker,
}
