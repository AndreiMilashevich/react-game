import React from 'react'
import Hole from '../Hole/Hole'
import './gameField.scss'

const GameField = ({ moleClickHandler, isMoleUp, holeNumber}) => {
  return (
    <div className="d-flex justify-content-between flex-wrap game_field">
      { 
      isMoleUp.map((item, index) => {
        return <Hole key={index + 1} id={index + 1} moleClickHandler={moleClickHandler} holeNumber={holeNumber}/>
      })
      }
    </div>
  )
}

export default GameField
