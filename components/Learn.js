import { Fade } from 'react-reveal'

const Learn = () => (
  <div className="wrapper">
    <Fade top>
      <h1>Learn Checkers</h1>
    </Fade>
    <Fade top>
      <p>
        Checkers is played by two players. Each player begins the game with 12
        colored discs. (Typically, one set of pieces is black and the other
        red.) Each player places his or her pieces on the 12 dark squares
        closest to him or her. Black moves first. Players then alternate moves.
      </p>
    </Fade>
    <Fade bottom>
      <p>
        The board consists of 64 squares, alternating between 32 dark and 32
        light squares. It is positioned so that each player has a light square
        on the right side corner closest to him or her.
        <br />A player wins the game when the opponent cannot make a move. In
        most cases, this is because all of the opponent's pieces have been
        captured, but it could also be because all of his pieces are blocked in.
      </p>
    </Fade>

    <style jsx>{`
      p {
        max-width: 60%;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    `}</style>
  </div>
)
export default Learn
