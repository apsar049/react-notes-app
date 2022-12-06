import React from 'react';

export default function Searchbar({ handleSearchNote }) {
  return (
    <div className="search">
      {/* <MdSearch className='search-icons' size='1.3em' /> */}
      <h1>Search</h1>
      <input
        onChange={event => handleSearchNote(event.target.value)}
        type="text"

        // placeholder="type to search..."
      />
    </div>
  );
}
