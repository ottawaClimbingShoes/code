import React from 'react';

const SearchBar = ({ filters, setFilters }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by name"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Search by size"
        value={filters.size}
        onChange={(e) => setFilters({ ...filters, size: e.target.value })}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

export default SearchBar;
