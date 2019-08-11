import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <div>
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
        font-size: 18px;
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
  </div>
)

export default Footer
