import React from 'react'
import { score } from '../../index'
import './score.scss'

class Score extends React.Component {
  state = {
    isOpen: false,
  }

  scoreClickHandler = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return this.state.isOpen ? (
      <div className="score_block">
        <p className="close_button" onClick={this.scoreClickHandler}>
          X
        </p>
        <p>Score</p>
        <div>
          {score.map((item) => {
            return (
              <div className="score_item">
                <div>{`${item.user}:`}</div>
                <div>{`${item.score}`}</div>
              </div>
            )
          })}
        </div>
      </div>
    ) : (
      <div className="startPage__item" onClick={this.scoreClickHandler}>
        Score
      </div>
    )
  }
}

export default Score
