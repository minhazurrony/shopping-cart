import React from 'react';

const ProductList = props => {
  const productDetail = props.products.map(product => {
    return (
      <React.Fragment key={product._id}>
        <div className='card flex-items'>
          <img
            className='card-img-top'
            src={product._source.images}
            alt='Card  cap'
          />
          <div className='card-body'>
            <h5 className='card-title'>{product._source.title}</h5>
            <p className='card-text'>
              Price: {product._source.price} <br />
              Sale Price: {product._source.salePrice}
            </p>
            <button href='#' className='btn btn-primary'>
              Add to Cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return <div className='card-group flex-container'>{productDetail}</div>;
};

export default ProductList;
