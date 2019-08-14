import { Fade } from 'react-reveal'
import Checkerboard from '../components/Checkerboard'

class Page extends React.Component {
  state = { mounted: false }

  componentDidMount = () => {
    this.setState({ mounted: true })
  }

  render() {
    return (
      <Fade>
        {/* Only show the checkers board when fully mounted, otherwise show a loader */}
        {this.state.mounted === false ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <Checkerboard
            dimensions={parseInt(localStorage.getItem('dimensions'))}
            playerColors={{
              player1: localStorage.getItem('color1'),
              player2: localStorage.getItem('color2'),
            }}
          />
        )}

        <style jsx>{`
          div.loading {
            fot-size: 20px;
            text-align: center;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </Fade>
    )
  }
}

export default Page
