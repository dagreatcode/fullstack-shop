import React, { Component } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";

class Shop extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          products: response.data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            {this.state.products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
