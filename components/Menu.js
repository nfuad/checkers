import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Fade } from 'react-reveal'
import Link from 'next/link'

class Menu extends React.Component {
  state = { toggle: false }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle })
    console.log(this.state.toggle)
  }

  render() {
    return (
      <Fade left>
        <div className="menu">
          <div className="toggler" onClick={this.handleClick}>
            {this.state.toggle === false ? (
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            )}
          </div>

          {this.state.toggle && (
            <Fade cascade top>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/checkers">
                    <a>Checkers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/learn">
                    <a>Learn</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          )}

          <style jsx>{`
            .menu {
              display: flex;
              width: 100%;
            }
            .toggler {
              font-size: 40px;
              font-weight: 700;
              line-height: 1;
              display: inline-block;
              transition: transform 0.2s;
              margin: 20px;
            }

            .toggler span {
              padding: 15px;
            }
            .toggler:hover {
              transform: scale(1.1);
              cursor: pointer;
            }
            ul {
              display: inline-flex;
              width: 100%;
              margin: 0;
              padding: 0;
              justify-content: space-evenly;
              align-items: center;
            }
            ul li {
              list-style-type: none;
            }
          `}</style>
        </div>
      </Fade>
    )
  }
}

export default Menu
