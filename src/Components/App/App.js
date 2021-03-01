import React from 'react'
import './app.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GameField from '../GameField/GameField'

class App extends React.Component {
  state = {
    score: 0,
    isMoleUp: [false, false, false, false, false, false, false, false, false],
    moleId: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    inGame: false,
    gameTimeMax: 30000,
    gameTimeMin: 10000,
    moleTimeUpMin: 300,
    moleTimeUpMax: 1500,
  }

  random = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  moleUp = () => {
    if (this.state.inGame) {
      const moleTimeUp = this.random(this.state.moleTimeUpMax, this.state.moleTimeUpMin)
      const holeNumber = this.random(this.state.isMoleUp.length - 1, 0)
      const arr = this.state.isMoleUp
      arr[holeNumber] = !arr[holeNumber]
      this.setState({
        isMoleUp: [...arr],
      })
      setTimeout(() => {
        arr[holeNumber] = !arr[holeNumber]
        this.setState({
          isMoleUp: [...arr],
        })
        this.moleUp()
      }, moleTimeUp)
    }
  }

  startGame = () => {
    this.setState({
      inGame: true,
    })
    const gameTimer = this.random(this.state.gameTimeMax, this.state.gameTimeMin)
    setTimeout(() => {
      this.setState({ inGame: false })
    }, gameTimer)
    setTimeout(() => {
      this.moleUp()
    }, 200)
  }

  moleClickHandler = (event) => {
    this.setState({
      score: this.state.score + 10,
    })
    // event.target.className = 'mole';
  }

  render() {
    return (
      <div className="wrapper background">
        <Header score={this.state.score} startGame={this.startGame} />
        <GameField moleClickHandler={this.moleClickHandler} moleId={this.state.moleId} isMoleUp={this.state.isMoleUp} />
        <Footer />
      </div>
    )
  }
}

export default App
