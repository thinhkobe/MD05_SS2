import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.handelCount}
        style={{ background: this.props.background, color: this.props.color }}
      >
        {this.props.text}
      </button>
    );
  }
}
