import React from "react";
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      amount: 0,
    };
    this.incree = this.incree.bind(this);
  }
  incree() {
    this.setState({ ...this.state, amount: this.state.amount });
  }
  render() {
    const { img, name, price } = this.props;
    return (
      <>
        <div className="element">
          <img src={img} alt="Photo" />
          <p id="name">{name}</p>
          <span id="price">USD {price}</span>
          <div className="buyAndSellContainer">
            <button
              className="btn-sell"
              id="sell"
              onClick={() => this.props.sell(this.props.price, this.props.id)}
            >
              Sell
            </button>
            <span id="amount">{this.props.amount}</span>
            <button
              class="btn-buy"
              id="buy"
              onClick={() => this.props.buy(this.props.price, this.props.id)}
            >
              Buy
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Item;
