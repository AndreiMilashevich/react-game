import './header.scss'
import { useState } from 'react'

const Header = ({ score, startGame, inGame, gameOver, statiscicsClose, molesCount, scoreList, userNameChangeHandler, userName }) => {
  const [isOptionsOpen, closeOptions] = useState(false)
  const [isScoreOpen, closeScore] = useState(false)
  const scoreMultiplier = 10
  const percents = 100
  

  const accuracy = Math.round((score / scoreMultiplier / molesCount) * percents)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const changeHandler = (event) => {
    localStorage.setItem('user', event.target.value)
  } 

  return (
    <header>
      <div className={isOptionsOpen ? 'page' : 'page_hidden page'}>
        <div className="page_close_button" onClick={() => closeOptions(!isOptionsOpen)}>
          X
        </div>
        Options
        <label>
          <p>Name:</p>
          <input type="text" className="options_name" value={userName} onChange={changeHandler}/>
        </label>
        <div>
          <button className="button button_options" onClick={toggleFullscreen}>
            Full screen
          </button>
        </div>
        <p>Music</p>
        <label>
          <input type="range" />
          <input type="checkbox" />
        </label>
        <p>Sound</p>
        <label>
          <input type="range" />
          <input type="checkbox" />
        </label>
      </div>
      <div className={isScoreOpen ? 'page' : 'page_hidden page'}>
        <div className="page_close_button" onClick={() => closeScore(!isScoreOpen)}>
          X
        </div>
        Score
        {
          scoreList.map((item) => {
            return (
              <div className="score_item">
                {item.user}: {item.score} points
              </div>
            )
          })
        }
      </div>
      <div className={gameOver ? 'page' : 'page_hidden page'}>
        <div className="page_close_button" onClick={() => statiscicsClose()}>
          X
        </div>
        Statistics:
        <p>Score: {score}</p>
        <p>Moles total: {molesCount}</p>
        <p>Clicks on moles: {score / scoreMultiplier}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>

      <div>Whack-a-mole! {score}</div>
      <div className="d-flex justify-content-center">
        <button className="button button_options" onClick={() => closeOptions(!isOptionsOpen)}>
          Options
        </button>
        <button className="button button_options" onClick={() => closeScore(!isScoreOpen)}>
          Score
        </button>
      </div>
      <button className="button button_start" onClick={startGame}>
        {inGame ? 'Stop' : 'Start'}
      </button>
    </header>
  )
}

export default Header
