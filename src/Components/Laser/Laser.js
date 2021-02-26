import React from 'react';
import './laser.scss';

class Laser extends React.Component {


  render() {
    return (
      <div className="laser" style={{left: this.props.left}}></div>
    )
  }
}

export default Laser;