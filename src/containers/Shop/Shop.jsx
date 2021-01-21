import React, { Component } from "react"; 
import axios from "axios";

class Shop extends Component {

    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd").then((response)=>{
            console.log(response.data);
        })
    }

  render() {
    return (
     <div>
       <h1>Shop Page</h1>
     </div>
    );
  }
}

export default Shop;