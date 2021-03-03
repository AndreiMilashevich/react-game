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
    userName: (localStorage.getItem('user') !== 'underfined' ? localStorage.getItem('user') : 'User'),
    scoreList: JSON.parse(localStorage.getItem('score')) || [],
    gameOver: false,
    molesCount: 0,
    soundValue: localStorage.getItem('soundValue') || 0.5,
    musicValue: localStorage.getItem('musicValue') || 1,
  }

  gameStatistics = JSON.parse(localStorage.getItem('score')) || []

  componentDidMount() {
    bangSound.volume = this.state.soundValue;
    backgroundMusic.volume = this.state.musicValue;
  }

  statiscicsClose = () => {
    this.setState({
      gameOver: false,
    })
  }

  rangeHandler = (target) => {
    if (target.id === 'music_range') {
      backgroundMusic.volume = target.value;
      localStorage.setItem('musicValue', target.value)
    } else {
      bangSound.volume = target.value;
      localStorage.setItem('soundValue', target.value)
    }
  }

  userNameChangeHandler = (event, data) => {
    const input = document.querySelector(".options_name")
    this.setState({
      userName: input.value
    })
    localStorage.setItem('user', input.value)
    
  }

  random = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  randomHole = () => {
    const { isMoleUp, randomHole } = this.state
    const holeNumber = this.random(isMoleUp.length - 1, 0)
    return randomHole === holeNumber ? this.randomHole() : holeNumber
  }

  moleUp = () => {
    const { inGame, moleTimeUpMax, moleTimeUpMin } = this.state
    if (inGame) {
      const moleTimeUp = this.random(moleTimeUpMax, moleTimeUpMin)
      let holeNumber = this.randomHole()
      this.setState({
        randomHole: holeNumber,
        molesCount: this.state.molesCount + 1,
      })
      setTimeout(() => {
        this.setState({
          randomHole: 0,
        })
        this.moleUp()
      }, moleTimeUp)
    } else {
      backgroundMusic.pause()
      this.setState({
        gameOver: true,
      })
    }
  }

  startGame = () => {
    const { inGame, gameTimeMax, gameTimeMin } = this.state
    if (!inGame) {
      this.setState({
        inGame: true,
        score: 0,
        molesCount: 0,
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
      this.gameStatistics.push({ user: this.state.userName, score: this.state.score })
      this.setState({
        inGame: false,
        gameOver: true,
        scoreList: this.gameStatistics,
      })
      localStorage.setItem('score', JSON.stringify(this.state.scoreList))
    }
  }

  moleClickHandler = (event) => {
    bangSound.play()
    this.setState({
      score: this.state.score + 10,
      randomHole: 0,
    })
  }

  render() {
    const { score, isMoleUp, inGame, randomHole, gameOver, molesCount, scoreList, userName, soundValue, musicValue } = this.state
    return (
      <div className="wrapper background">
        <Header
          soundValue={soundValue}
          musicValue={musicValue}
          rangeHandler={this.rangeHandler}
          userName={userName}
          userNameChangeHandler={this.userNameChangeHandler}
          scoreList={scoreList}
          molesCount={molesCount}
          statiscicsClose={this.statiscicsClose}
          gameOver={gameOver}
          score={score}
          startGame={this.startGame}
          fullscreen={this.fullScreenMode}
          inGame={inGame}
        />
        <GameField moleClickHandler={this.moleClickHandler} isMoleUp={isMoleUp} holeNumber={randomHole} />
      </div>
    )
  }
}

export default Game
