import React from 'react';

const SearchBar = props => {
  return (
    <form onSubmit={props.handleProductSearch}>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />
        <div className='input-group-append'>
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
