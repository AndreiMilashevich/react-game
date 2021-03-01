import './hole.scss'
import React from 'react'

class Hole extends React.Component {
  constructor(props) {
    super(props)
    this.moleRef = React.createRef()
    this.holeRef = React.createRef()
  }

  render() {
    return (
      <div className="hole" ref={this.holeRef}>
        <div
          ref={this.moleRef}
          className={this.props.isMoleUp ? 'mole mole_up' : 'mole'}
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