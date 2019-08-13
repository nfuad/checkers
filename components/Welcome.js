import Link from 'next/link'
import { Fade } from 'react-reveal'
import Rules from '../components/Rules'
import Options from '../components/Options'

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
        <Options />
        <Link href="/learn">
          <button className="cta-button">Learn More</button>
        </Link>
      </div>
    </Fade>

    <style jsx>{`
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
