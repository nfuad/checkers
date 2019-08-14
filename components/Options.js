import Modal from 'react-modal'
import Fade from 'react-reveal/Fade'
import Router from 'next/router'

// Custom styles for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

class Options extends React.Component {
  state = {
    modalIsOpen: false,
    dimensions: 8,
    color1: '#ed4747',
    color2: '#fff',
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  // handle click for the continue button
  handleClick = () => {
    // set the configuration in the localstorage
    localStorage.setItem('dimensions', this.state.dimensions)
    localStorage.setItem('color1', this.state.color1)
    localStorage.setItem('color2', this.state.color2)
    // continue to checkers page
    Router.push('/checkers')
  }

  // handle board dimension change
  handleDimensionChange = event => {
    // use parseInt to make sure the data is of type number
    this.setState({ dimensions: parseInt(event.target.value) })
  }

  // handle color change for player 1
  handleColor1Change = event => {
    this.setState({ color1: event.target.value })
  }

  // handle color change for player 2
  handleColor2Change = event => {
    this.setState({ color2: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal} className="cta-button">
          Get Started
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Choose Options"
        >
          <Fade>
            <button className="cta-button-small" onClick={this.closeModal}>
              X
            </button>
            <h4 ref={subtitle => (this.subtitle = subtitle)}>
              What should be the dimensions of the checkerboard?
            </h4>
            <select
              value={this.state.dimensions}
              onChange={this.handleDimensionChange}
            >
              <option value={8}>8x8 squares</option>
              <option value={10}>10x10 squares</option>
              <option value={12}>12x12 squares</option>
              <option value={16}>16x16 squares</option>
            </select>

            <h4 ref={subtitle => (this.subtitle = subtitle)}>
              Choose a color for player 1
            </h4>

            <select
              value={this.state.color1}
              onChange={this.handleColor1Change}
            >
              <option value="#ed4747">Red Color</option>
              <option value="mediumpurple">Purple Color</option>
              <option value="cadetblue">Cadet Blue Color</option>
              <option value="darkseagreen">Dark Green Color</option>
              <option value="gold">Golden Color</option>
            </select>

            <h4 ref={subtitle => (this.subtitle = subtitle)}>
              Choose a color for player 2
            </h4>

            <select
              value={this.state.color2}
              onChange={this.handleColor2Change}
            >
              <option value="white">White Color</option>
              <option value="aliceblue">Light Blue Color</option>
              <option value="#9dffdb">Light Green Color</option>
              <option value="#fac4ee">Light Pink Color</option>
              <option value="#ffeec7">Light Yellow Color</option>
            </select>

            <div className="action">
              <button className="cta-button" onClick={this.handleClick}>
                Continue
              </button>
            </div>
            <style jsx>{`
              select {
                padding: 5px 25px 5px 25px;
                background: white;
                border: none;
                border-bottom: 2.5px solid #111;
              }
              .action {
                width: 100%;
                margin-top: 25px;
                text-align: center;
              }
              .cta-button {
                width: 70%;
                margin: auto;
              }
            `}</style>
          </Fade>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Options
