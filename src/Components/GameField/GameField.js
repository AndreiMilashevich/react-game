import React from 'react'
import Hole from '../Hole/Hole'
import './gameField.scss'

const GameField = ({ moleClickHandler, isMoleUp, moleId }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap game_field">
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[0]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[1]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[2]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[3]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[4]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[5]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[6]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[7]} />
      <Hole moleClickHandler={moleClickHandler} isMoleUp={isMoleUp[8]} />
    </div>
  )
}

export default GameField
