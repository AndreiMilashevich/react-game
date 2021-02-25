import './gamePage.scss'
import React from 'react'

class GamePage extends React.Component {
  state = {
    shipPosition: 1,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.moveShip)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.moveShip)
  }

  moveShip = (event) => {
    if (event.key === 'ArrowLeft' ) {
      this.setState({shipPosition: this.state.shipPosition + 10});
    }
  }

  render() {
    return (
      <div className="gamePage">
        <header className="gamePage_header d-flex align-items-center justify-content-between">
          <div className="gamePage_header_item">Score: 250</div>
          <div className="gamePage_header_item">Stage: 1</div>
          <div className="gamePage_header_item">Lives: </div>
        </header>
        <main className="gamePage_gameField">
          <div className="gamePage_user_track">
            <div className="gamePage_user_ship" ></div>
          </div>
        </main>
      </div>
    )
  }
}

export default GamePage
