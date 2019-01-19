import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';
import CartProducts from './components/CartProducts';

class App extends Component {
  state = {
    searchTerm: '',
    productList: [],
    cartProducts: [],
    isLoading: false,
    isSearchResult: false
  };

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleCartButtonClick = product => {
    this.setState(prevState => {
      return { cartProducts: [...prevState.cartProducts, product] };
    });
  };

  handleClearCart = () => {
    this.setState({ cartProducts: [] });
  };

  handleDeleteCartItem = id => {
    this.setState({
      cartProducts: this.state.cartProducts.filter(product => {
        return product._id !== id;
      })
    });
  };

  productSearch = e => {
    e.preventDefault();
    let { searchTerm } = this.state;
    this.setState({ isLoading: true, isSearchResult: false });
    let api = `https://cors-anywhere.herokuapp.com/http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchTerm}`;

    fetch(api, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.hits.hits,
          isLoading: false,
          isSearchResult: true
        });
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
            {this.state.isLoading && <p>Loading..</p>}
            {this.state.searchTerm === '' ? (
              <p>What'll You Buy Today?</p>
            ) : this.state.productList.length === 0 &&
              this.state.isSearchResult ? (
              <p>Nothing Found...!</p>
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
              onHandleClearCart={this.handleClearCart}
              handleDeleteCartItem={this.handleDeleteCartItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
