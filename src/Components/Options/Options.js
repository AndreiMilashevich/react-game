import React from 'react'
import './options.scss'

class Options extends React.Component {
  state = {
    isOpen: false,
    isChecked: true,
  }

  render() {
    return this.state.isOpen ? (
      <div className="options_block">
        <p
          className="close_button"
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen })
          }}
        >
          X
        </p>
        <h2>Options</h2>
        <div>
          <label>
            <p>Name</p>
            <input type="text" className="options_name" />
          </label>
          <label
            onChange={() => {
              this.setState({ isChecked: !this.state.isChecked })
            }}
          >
            <p>Retro mode</p>
            <div className="fake-checkbox">
              {this.state.isChecked ? <div className="fake-checkbox_point"></div> : ''}
            </div>
            <input type="checkbox" className="retro-checkbox" />
          </label>
          <label>
            <p>Sound</p>
            <input type="range" />
          </label>
          <label>
            <p>Music</p>
            <input type="range" />
          </label>
        </div>
      </div>
    ) : (
      <div
        className="startPage__item"
        onClick={() => {
          this.setState({ isOpen: !this.state.isOpen })
        }}
      >
        Options
      </div>
    )
  }
}

export default Options
