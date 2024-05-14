import React, { Component } from "react";

export default class Color extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="color "
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.newcolor(this.props.id)}
      ></div>
    );
  }
}
