import "./App.css";
import Button from "./component/Button";

import React, { Component } from "react";
import ColorContainer from "./component/ColorContainer";
import Header from "./component/Header";
import ListItems from "./component/ListItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handelCount = this.handelCount.bind(this);
  }

  handelCount = function () {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {/* <Button
          handelCount={this.handelCount}
          text={this.state.count}
          color="blue"
        ></Button>
        <ColorContainer number="18"></ColorContainer> */}
        <Header />
        <ListItems />
      </div>
    );
  }
}
