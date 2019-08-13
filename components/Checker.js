import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'

import { regularChecker, kingedChecker } from './styles'

function Checker({
  square,
  square: { isKinged, occupiedBy } = {},
  handlePick,
  label,
  scoreboardStyle,
  styles,
  playerColors,
}) {
  const { player1, player2 } = playerColors
  const color = occupiedBy
    ? occupiedBy === 1
      ? player1 || 'white'
      : player2 || '#ed4747'
    : label === 'player1-checker'
    ? player1 || '#ed4747'
    : player2 || 'black'

  return (
    <div
      css={[
        isKinged
          ? styles.kingedChecker
            ? styles.kingedChecker(color)
            : kingedChecker(color)
          : styles.regularChecker
          ? styles.regularChecker(color)
          : regularChecker(color),
        scoreboardStyle,
      ]}
      data-testid={label && label}
      onClick={handlePick ? () => handlePick(square) : null}
    >
      {isKinged && <FontAwesomeIcon icon={faChessKing} />}
    </div>
  )
}

Checker.propTypes = {
  square: PropTypes.object,
  handlePick: PropTypes.func,
  label: PropTypes.string,
  scoreboardStyle: PropTypes.object,
  styles: PropTypes.object,
  playerColors: PropTypes.object,
}

export default Checker
