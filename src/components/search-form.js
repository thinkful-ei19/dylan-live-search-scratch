import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="searchInput">Search</label>
      <input id="searchInput" type="text" placeholder="Cappy" onChange={e => props.searchTerm(e.target.value)} />
    </form>
  );
};

export default SearchForm;