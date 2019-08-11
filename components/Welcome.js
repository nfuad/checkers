import Link from 'next/link'
import { Fade } from 'react-reveal'
import Rules from '../components/Rules'

const Welcome = () => (
  <div className="wrapper">
    <Fade top>
      <h1>Welcome To The Checkers Game!!!</h1>
    </Fade>
    <Fade bottom>
      <p>
        In case you're not familiar with Checkers, I suggest you head over to
        the{' '}
        <Link href="/learn">
          <a>learn page</a>
        </Link>{' '}
        first :D
      </p>
    </Fade>

    <Rules />

    <Fade top>
      <div className="actions">
        <Link href="/checkers">
          <button className="cta-button">Get Started</button>
        </Link>
        <Link href="/learn">
          <button className="cta-button">Learn More</button>
        </Link>
      </div>
    </Fade>

    <style jsx>{`
      h1,
      h3 {
        text-transform: capitalize;
      }

      .cta-button {
        background: #f8f8f8;
        border: #111;
        padding: 15px 35px 15px 35px;
        font-size: 16x;
        border: 2px solid #111;
        cursor: pointer;
        margin-right: 35px;
        transition: background 0.2s, color 0.3s;
      }
      .cta-button:nth-child(2) {
        margin-right: 0;
      }

      .cta-button:hover {
        background: #111;
        color: #f8f8f8;
      }
      h1,
      h3,
      p {
        margin-bottom: 0;
        padding-bottom: 0;
      }
      a {
        font-size: 16px;
      }
    `}</style>
  </div>
)

export default Welcome
