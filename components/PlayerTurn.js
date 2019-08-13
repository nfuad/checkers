import PropTypes from 'prop-types'

const PlayerTurn = props => (
  <div>
    <h2>player {props.playerTurn === 1 ? "One's" : "Two's"} turn</h2>

    <style jsx>{`
      & {
        text-align: center;
      }
      h2 {
        background: ${props.playerTurn === 1
          ? props.playerColors.player1
          : '#111'};
        color: white;
        display: inline-block;
        padding: 10px 25px 10px 25px;
        margin: 0 auto;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }

      @media only screen and (max-width: 800px) {
        h2 {
          font-size: 20px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          margin-top: 20px;
        }
      }
      @media only screen and (max-width: 700px) {
        h2 {
          font-size: 18px;
          border-radius: 5px;
        }
      }
      @media only screen and (max-width: 650px) {
        h2 {
          font-size: 15px;
          border-radius: 5px;
        }
      }
    `}</style>
  </div>
)

PlayerTurn.propTypes = {
  playerTurn: PropTypes.number,
  playerColors: PropTypes.object,
}

export default PlayerTurn
