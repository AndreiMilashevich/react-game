import React from 'react'
import './game.scss'
import Header from '../Header/Header'
import GameField from '../GameField/GameField'
import backgroundAudio from '../../assets/sounds/background.mp3'
import bangAudio from '../../assets/sounds/hit.wav'

const backgroundMusic = new Audio(backgroundAudio)
const bangSound = new Audio(bangAudio)

class Game extends React.Component {
  state = {
    score: 0,
    isMoleUp: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    inGame: false,
    gameTimeMax: 30000,
    gameTimeMin: 10000,
    moleTimeUpMin: 500,
    moleTimeUpMax: 1500,
    randomHole: 0,
    isMoleBang: false,
    moleTimeUp: 150,
  }

  random = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  randomHole = () => {
    const {isMoleUp, randomHole} = this.state
    const holeNumber = this.random(isMoleUp.length - 1, 0)
    return randomHole === holeNumber ? this.randomHole() : holeNumber
  }

  moleUp = () => {
    const {inGame, moleTimeUpMax, moleTimeUpMin} = this.state
    if (inGame) {
      const moleTimeUp = this.random(moleTimeUpMax, moleTimeUpMin)
      let holeNumber = this.randomHole()
      this.setState({
        randomHole: holeNumber,
      })
      setTimeout(() => {
        this.setState({
          randomHole: 0,
        })
        this.moleUp()
      }, moleTimeUp)
    } else {
      backgroundMusic.pause()
    }
  }

  startGame = () => {
    const {inGame, gameTimeMax, gameTimeMin} = this.state
    if (!inGame) {
      this.setState({
        inGame: true,
        score: 0,
      })
      const gameTimer = this.random(gameTimeMax, gameTimeMin)
      setTimeout(() => {
        this.setState({ inGame: false })
      }, gameTimer)
      setTimeout(() => {
        this.moleUp()
      }, 200)
      backgroundMusic.currentTime = 0
      backgroundMusic.play()
    } else {
      this.setState({
        inGame: false,
      })
    }
  }

  moleClickHandler = (event) => {
    bangSound.play()
    this.setState({
      score: this.state.score + 10,
      randomHole: 0
    })
    
  }

  render() {
    const {score, isMoleUp, inGame, randomHole } = this.state
    return (
      <div className="wrapper background">
        <Header
          score={score}
          startGame={this.startGame}
          fullscreen={this.fullScreenMode}
          inGame={inGame}
        />
        <GameField
          moleClickHandler={this.moleClickHandler}
          isMoleUp={isMoleUp}
          holeNumber={randomHole}
        />
      </div>
    )
  }
}

export default Game
