import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';
import CartProducts from './components/CartProducts';

class App extends Component {
  state = {
    searchTerm: 'bag',
    productList: [],
    //searchedProducts: [],
    cartProducts: []
  };

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleCartButtonClick = product => {
    this.setState(prevState => {
      return { cartProducts: [...prevState.cartProducts, product] };
    });
  };

  productSearch = e => {
    e.preventDefault();
    let { searchTerm } = this.state;
    let api = `http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchTerm}`;

    fetch(api)
      .then(res => res.json())
      .then(data => {
        this.setState({ productList: data.hits.hits });
      });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <SearchBar
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleProductSearch={this.productSearch}
            />
            {this.state.productList.length === 0 ? (
              <p>What'll You Buy Today?</p>
            ) : (
              <ProductList
                products={this.state.productList}
                handleCartButtonClick={this.handleCartButtonClick}
              />
            )}
          </div>
          <div className='col-md-4'>
            <CartProducts
              cartItem={this.state.cartProducts}
              productPrice={this.state.cartProducts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
