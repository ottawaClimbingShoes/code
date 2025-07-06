import React, { useState, useEffect } from 'react';
import shoes from '../data/shoes';
import ShoeCard from '../components/ShoeCard';

const Shop = () => {
  const [filters, setFilters] = useState({ name: '', size: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get unique available sizes from all shoes
const availableSizes = Array.from(
  new Set(shoes.flatMap(shoe => shoe.size))
).sort((a, b) => a - b);


  // Filter shoes based on name and size
  const filteredShoes = shoes.filter((shoe) =>
  shoe.name.toLowerCase().includes(filters.name.toLowerCase()) &&
  (
    filters.size === '' ||
    shoe.size.includes(parseFloat(filters.size))
  )
);


  // Pagination
  const totalPages = Math.ceil(filteredShoes.length / itemsPerPage);
  const paginatedShoes = filteredShoes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div>
      <h2>Climbing Shoes</h2>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'flex-end', paddingRight: "2rem"  }}>
        <input
          type="text"
          placeholder="Search by name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <select
          value={filters.size}
          onChange={(e) => setFilters({ ...filters, size: e.target.value })}
        >
          <option value="">All Sizes</option>
          {availableSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Shoe Cards Grid */}
      <div className="shoe-grid">
        {paginatedShoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: '0 5px',
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === i + 1 ? '#333' : '#eee',
              color: currentPage === i + 1 ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
