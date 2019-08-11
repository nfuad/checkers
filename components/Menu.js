import Fade from 'react-reveal/Fade'

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
            {this.state.toggle === false ? <span>|||</span> : <span>X</span>}
          </div>

          {this.state.toggle && (
            <Fade cascade top>
              <ul>
                <li>
                  <a href="/">item</a>
                </li>
                <li>
                  <a href="/">item</a>
                </li>
                <li>
                  <a href="/">item</a>
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
              transform: rotate(-90deg);
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
              transform: rotate(-90deg) scale(1.1);
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
