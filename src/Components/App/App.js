import React from 'react'
import './app.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GameField from '../GameField/GameField'
import backgroundAudio from '../../assets/sounds/background.mp3'
import bangAudio from '../../assets/sounds/hit.wav'

const backgroundMusic = new Audio(backgroundAudio)
const bangSound = new Audio(bangAudio)


class App extends React.Component {
  state = {
    score: 0,
    isMoleUp: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    inGame: false,
    gameTimeMax: 30000,
    gameTimeMin: 10000,
    moleTimeUpMin: 300,
    moleTimeUpMax: 1500,
    randomHole: 0,
  }

  // fullScreenMode = () => {
  //   document.documentElement.requestFullscreen()
  // }

  html = document.documentElement

  componentDidMount() {}

  random = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  moleUp = () => {
    if (this.state.inGame) {
      const moleTimeUp = this.random(this.state.moleTimeUpMax, this.state.moleTimeUpMin)
      const holeNumber = this.random(this.state.isMoleUp.length - 1, 0)
      this.setState({
        randomHole: holeNumber
      })
      setTimeout(() => {
        this.setState({
          randomHole: 0,
        })
        this.moleUp()
      }, moleTimeUp)



      // const arr = this.state.isMoleUp
      


      // arr[holeNumber] = !arr[holeNumber]
      // this.setState({
      //   isMoleUp: [...arr],
      // })
      
    } else {
      backgroundMusic.pause()
    }
  }

  startGame = () => {
    if (!this.state.inGame) {
      this.setState({
        inGame: true,
        score: 0,
      })
      const gameTimer = this.random(this.state.gameTimeMax, this.state.gameTimeMin)
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
    })
  }

  render() {
    return (
      <div className="wrapper background">
        <Header score={this.state.score} startGame={this.startGame} fullscreen={this.fullScreenMode} inGame={this.state.inGame}/>
        <GameField moleClickHandler={this.moleClickHandler} isMoleUp={this.state.isMoleUp}  holeNumber={this.state.randomHole}/>
        <Footer />
      </div>
    )
  }
}

export default App 
