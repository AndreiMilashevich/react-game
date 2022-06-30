import './hole.scss'
import React from 'react'

class Hole extends React.Component {
  state = {
    isMoleBang: false,
  }

  clickHandler = () => {
    const { moleClickHandler } = this.props
    this.setState({
      isMoleBang: true,
    })
    moleClickHandler()
    setTimeout(() => {
      this.setState({
        isMoleBang: false,
      })
    }, 150)
  }

  render() {
    const { id, holeNumber } = this.props
    const { isMoleBang } = this.state
    return (
      <div className={isMoleBang ? 'hole hole_bang hole_bang_large' : 'hole'} id={id} holeNumber={holeNumber}>
        <div className={id === holeNumber && !isMoleBang ? 'mole mole_up' : 'mole'} onClick={this.clickHandler}></div>
      </div>
    )
  }
}

export default Hole
