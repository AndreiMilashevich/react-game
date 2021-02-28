import './gamePage.scss';
import React from 'react';
import Laser from '../Laser/Laser'

const userShipStep = 10

class GamePage extends React.Component {
  state = {
    left: 0,
    userShipClassList: 'gamePage_user_ship',
  }

  gameField = React.createRef();
  userShip = React.createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.moveShip);
    window.addEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      const classes = this.state.userShipClassList.split(' ');
      classes.pop();
      this.setState({userShipClassList: classes.join(' ')})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.moveShip);
    window.addEventListener('keyup', this.keyUpHandler);
  }

  moveShip = (event) => {
    if (
      event.key === 'ArrowRight' &&
      this.state.left < this.gameField.current.offsetWidth - this.userShip.current.offsetWidth
    ) {
      this.setState({
        left: this.state.left + userShipStep,
      })
    }
    if (event.key === 'ArrowRight') {
      this.setState({userShipClassList: this.state.userShipClassList.includes('move_right')
          ? this.state.userShipClassList
          : this.state.userShipClassList + ' move_right',})
    }
    if (event.key === 'ArrowLeft' && this.state.left > 0) {
      this.setState({
        left: this.state.left - userShipStep,
        userShipClassList: this.state.userShipClassList.includes('move_left')
          ? this.state.userShipClassList
          : this.state.userShipClassList + ' move_left',
      })
    }
    if (event.key === 'ArrowLeft') {
      this.setState({userShipClassList: this.state.userShipClassList.includes('move_left')
          ? this.state.userShipClassList
          : this.state.userShipClassList + ' move_left',})
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
        <main className="gamePage_gameField" ref={this.gameField}>
          <div className="gamePage_user_track">
            <div className={this.state.userShipClassList} style={{ left: this.state.left }} ref={this.userShip}>
              
            </div>
             <Laser left={this.state.left}/>
          </div>
        </main>
      </div>
    )
  }
}

export default GamePage
