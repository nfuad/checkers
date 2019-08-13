import { Fade } from 'react-reveal'
import Rules from './Rules'

const Learn = () => (
  <div className="wrapper">
    <Fade top>
      <h1>Checkers' Basics</h1>
    </Fade>
    <Fade top>
      <p>
        Checkers is played by two players. Each player begins the game with 12
        colored discs (minimum). One set is dark, and the other is light. Each
        player places his/her pieces on the dark squares closest to him/her.
        Players then alternate moves.
      </p>
    </Fade>
    <Fade bottom>
      <p>
        A typical game board consists of 64 squares, alternating between 32 dark
        and 32 light squares. But the numbers depend on the dimensions of the
        board😀 It is positioned so that each player has a light square on the
        right side corner closest to him or her.
        <br />A player wins the game when the opponent cannot make a move. In
        most cases, this is because all of the opponent's pieces have been
        captured, but it could also be because all of his pieces are blocked in.
      </p>
    </Fade>
    <Fade>
      <h3>Here's a video to help you</h3>
      <iframe
        src="https://www.youtube.com/embed/ScKIdStgAfU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>
        <strong>Source: </strong>A handy{' '}
        <a href="https://www.youtube.com/watch?v=ScKIdStgAfU" target="_blank">
          Youtube video
        </a>{' '}
        as you can see
      </p>
    </Fade>

    <Rules />

    <style jsx>{`
      iframe {
        width: 500px;
        height: 500px;
      }
    `}</style>
  </div>
)
export default Learn
