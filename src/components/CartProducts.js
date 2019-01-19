import React, { Component } from 'react';
class CartProducts extends Component {
  render() {
    const cartItems = this.props.cartItem.map(item => {
      return (
        <tr key={item._id}>
          <td>{item._source.title}</td>
          <td>{item._source.salePrice}</td>
        </tr>
      );
    });

    let TotalPrice = 0;

    this.props.productPrice.map(item => {
      return (TotalPrice += item._source.salePrice);
    });

    if (cartItems.length !== 0) {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Product Name</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems}
            <tr>
              <td>Total</td>
              <td>{TotalPrice}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Product Name</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
        </table>
      );
    }
  }
}

export default CartProducts;
