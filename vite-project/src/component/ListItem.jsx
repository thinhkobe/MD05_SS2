import React from "react";
import Item from "./Item";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Remaining: 2100,
      products: [
        {
          id: 1,
          name: "iphone 14 promax",
          price: 1700,
          imgUrl: "https://i.imgur.com/SH7FrjV.jpg",
          number: 0,
        },
        {
          id: 2,
          name: "Product 2",
          price: 100,
          imgUrl: "https://example.com/image2.jpg",
          number: 0,
        },
        {
          id: 3,
          name: "Product 3",
          price: 150,
          imgUrl: "https://example.com/image3.jpg",
          number: 0,
        },
        {
          id: 4,
          name: "Product 4",
          price: 200,
          imgUrl: "https://example.com/image4.jpg",
          number: 0,
        },
        {
          id: 5,
          name: "Product 5",
          price: 250,
          imgUrl: "https://example.com/image5.jpg",
          number: 0,
        },
        {
          id: 6,
          name: "Product 6",
          price: 300,
          imgUrl: "https://example.com/image6.jpg",
          number: 0,
        },
        {
          id: 7,
          name: "Product 7",
          price: 350,
          imgUrl: "https://example.com/image7.jpg",
          number: 0,
        },
        {
          id: 8,
          name: "Product 8",
          price: 400,
          imgUrl: "https://example.com/image8.jpg",
          number: 0,
        },
        {
          id: 9,
          name: "Product 9",
          price: 450,
          imgUrl: "https://example.com/image9.jpg",
          number: 0,
        },
        {
          id: 10,
          name: "Product 10",
          price: 500,
          imgUrl: "https://example.com/image10.jpg",
          number: 0,
        },
      ],
    };
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
  }
  buy(price, id) {
    if (this.state.Remaining < price) {
      this.setState({ ...this.state });
    } else {
      this.setState({
        ...this.state,
        Remaining: this.state.Remaining - price,
        products: this.state.products.map((product) => {
          if (product.id == id) {
            product.number = product.number + 1;
            return product;
          } else {
            return product;
          }
        }),
      });
    }
  }
  sell(price, id) {
    const productIndex = this.state.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1 || this.state.products[productIndex].number <= 0) {
      this.setState({ ...this.state });
    } else {
      this.setState((prevState) => ({
        Remaining: prevState.Remaining + price,
        products: prevState.products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              number: product.number - 1,
            };
          } else {
            return product;
          }
        }),
      }));
    }
  }

  render() {
    return (
      <div className="relative">
        <div className="navbar-content">
          <div>Remaining: $ {this.state.Remaining} </div>
          <div>You haven't spent a single dollar! start buying!</div>
        </div>
        <div className="container">
          {this.state.products.map((product) => (
            <Item
              amount={product.number}
              id={product.id}
              img={product.imgUrl}
              name={product.name}
              price={product.price}
              buy={this.buy}
              sell={this.sell}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ListItems;
