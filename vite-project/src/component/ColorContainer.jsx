import React, { Component } from "react";
import Color from "./Color";

export default class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listColor: [
        { id: 1, color: this.randomColor() },
        { id: 2, color: this.randomColor() },
        { id: 3, color: this.randomColor() },
      ],
    };
    this.setColor = this.setColor.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const hex =
      "#" +
      ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

    return hex;
  }
  setColor(id) {
    let newlistcolor = [...this.state.listColor];
    newlistcolor[id] = { id: id + 1, color: this.randomColor() };
    this.setState({ listColor: [...newlistcolor] });
  }

  render() {
    return (
      <div className="colorContainer">
        {console.log(this.state.listColor)}
        {this.state.listColor.map((color) => (
          <Color
            color={color.color}
            id={color.id - 1}
            newcolor={this.setColor}
          />
        ))}
      </div>
    );
  }
}
