import React from "react";
import './options.scss';

class Options extends React.Component {
	state = {
		isOpen: false,
	};

	optionsClickHandler = () => {
		this.setState({ isOpen: !this.state.isOpen });
		console.log("click");
	}

	render() {
		return this.state.isOpen ? (
			<div className="options_block" >
        <p className="close_button" onClick={this.optionsClickHandler}>X</p>
        <p>Options</p>
        <label></label>
      </div>
		) : (
			<div className="startPage__item" onClick={this.optionsClickHandler}>
				Options
			</div>
		);
	}
}

export default Options;