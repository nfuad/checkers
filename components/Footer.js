import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'

const Footer = () => (
  <Fade bottom>
    <p>
      Designed &amp; Developed with{' '}
      <span className="icon">
        <FontAwesomeIcon icon={faHeart} className="fa-2x" />{' '}
      </span>{' '}
      by{' '}
      <a href="https://nafis.co" target="_blank">
        Nafis Fuad
      </a>
    </p>

    <style jsx>{`
      p {
        text-align: center;
        opacity: 0; // keep initial opacity to zero for fade in animation
      }

      p > span.icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        animation: pulse 0.5s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1.1);
        }
        70% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
    `}</style>
  </Fade>
)

export default Footer
