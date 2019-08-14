import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'

const Footer = () => (
  <Fade bottom>
    <p>
      Designed and{' '}
      <span className="icon">
        <FontAwesomeIcon icon={faFileCode} className="fa-2x" />{' '}
      </span>{' '}
      with{' '}
      <span className="heart-icon">
        <FontAwesomeIcon icon={faHeart} className="fa-2x" />{' '}
      </span>{' '}
      by{' '}
      <a href="https://nafis.co" target="_blank">
        Nafis Fuad.
      </a>
      <br />
      <span className="copyleft">&copy;</span> Copyleft. No Rights Reserved.{' '}
      {// Always get the current year automatically
      new Date().getFullYear()}
    </p>

    <style jsx>{`
      p,
      a,
      span {
        font-size: 14px;
        font-family: 'Nunito', cursive;
      }
      p {
        text-align: center;
        opacity: 0; // keep initial opacity to zero for fade in animation
        padding-top: 70px;
        padding-bottom: 20px;
      }

      p > span.icon,
      p > span.heart-icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        color: darkgrey;
      }

      p > span.heart-icon {
        width: 20px;
        height: 20px;
        animation: pulse 0.5s infinite;
      }

      .copyleft {
        display: inline-block;
        transform: rotate(
          180deg
        ); // rotate the copyright symbol by 180 degrees to get the copyleft one
        font-size: 16px;
      }

      // Add pulse animation to the heart icon specifically
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

      @media (max-width: 500px) {
        p,
        a,
        span {
          font-size: 12px;
        }
      }
    `}</style>
  </Fade>
)

export default Footer
