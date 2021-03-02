import './hole.scss'
import React from 'react'

class Hole extends React.Component {
  constructor(props) {
    super(props)
    this.moleRef = React.createRef()
    this.holeRef = React.createRef()
  }

//избавиться от рефов. className={`mole${isMoleUp && !isMoleBang ? ' is-mole-up' : ''}`} 
// isMoleUp = activeIndex === moleIndex
// onClick = this.props.onClickHandler
// попробовать создать отдельный метод на click который будет сетать флаг в стейте isBang. Этот флаг  должен убирать класс is-Mole-Up and isMoleBang
// попробовать по setTimeout сетать false

  render() {
    return (
      <div className="hole" ref={this.holeRef} id={this.props.id} holeNumber={this.props.holeNumber}>
        <div
          ref={this.moleRef}
          className={this.props.id === this.props.holeNumber ? 'mole mole_up' : 'mole'}
          onClick={() => {
            this.props.moleClickHandler()
            this.className = 'mole'
            this.moleRef.current.className = 'mole'
            this.holeRef.current.className = 'hole hole_bang';
            this.holeRef.current.className = 'hole hole_bang hole_bang_large';
            setTimeout(() => {
              this.holeRef.current.className = 'hole'
            }, 150)
            // isMoleUp ?
          }}
        ></div>
      </div>
    )
  }
}

// const Hole = ({ moleClickHandler, isMoleUp }) => {

// }

export default Hole
