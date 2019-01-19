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
        <React.Fragment>
          <div className='row'>
            <div className='col-md-8'>
              <h2>Cart</h2>
            </div>

            <div className='col-md-4'>
              <button
                onClick={this.props.onHandleClearCart}
                className='btn btn-primary'
              >
                Clear All
              </button>
            </div>
          </div>
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
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className='row'>
            <div className='col-md-8'>
              <h2>Cart</h2>
            </div>

            <div className='col-md-4'>
              <button className='btn btn-secondary disabled'>Clear All</button>
            </div>
          </div>

          <p>You have no item in your cart</p>
        </React.Fragment>
      );
    }
  }
}

export default CartProducts;
