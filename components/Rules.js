import { Fade } from 'react-reveal'

const Rules = () => (
  <Fade>
    <ul>
      <h3>The Rules at a glance</h3>
      <li>
        Moves are only allowed on the dark squares, so pieces can only move
        diagonally. Single pieces are always limited to forward moves (i.e.
        toward the opponent).
      </li>
      <li>
        A piece making a non-capturing move (not involving a jump) may move only
        one square.
      </li>
      <li>
        A piece making a capturing move (a jump) leaps over one of the
        opponent's pieces, landing in a straight diagonal line on the other
        side.
      </li>
      <li>
        Only one piece may be captured in a single jump; however, multiple jumps
        are allowed during a single turn.
      </li>
      <li>When a piece is captured, it is removed from the board.</li>
      <li>
        If a player is able to make a capture, there is no option; the jump must
        be made. If more than one capture is available, the player is free to
        choose whichever s/he prefers.
      </li>
      <li>
        When a piece reaches the furthest row from the player who controls that
        piece, it is crowned as a king. One of the pieces which had been
        captured is placed on top of the king so that it is twice as high as a
        single piece.
      </li>
      <li>
        Kings are limited to moving diagonally but may move both forward and
        backward. (Remember that single pieces, i.e. non-kings, are always
        limited to forward moves.)
      </li>
      <li>
        Kings may combine jumps in several directions, forward and backward, on
        the same turn. Single pieces may shift direction diagonally during a
        multiple capture turn, but must always jump forward (toward the
        opponent).
      </li>
    </ul>

    <style jsx>{`
      ul {
        padding: 0;
        text-align: left;
        width: 60%;
        margin: auto;
        margin-bottom: 15px;
      }

      @media only screen and (max-width: 1000px) {
        ul {
          width: 65%;
        }
      }
      @media only screen and (max-width: 800px) {
        ul {
          width: 70%;
        }
      }

      @media only screen and (max-width: 500px) {
        ul {
          width: 80%;
        }
      }
    `}</style>
  </Fade>
)
export default Rules
