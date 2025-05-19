import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import './Veg.css'; // Reuse the same CSS used in Veg.jsx
import { toast, ToastContainer } from 'react-toastify';

function NonVeg() {
  const nonVegProducts = useSelector(state => state.products.NonVeg);
  const dispatch = useDispatch();

  const [selectedRange, setSelectedRange] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const priceRanges = [
    { value: 'Rs 10 to Rs 50', min: 10, max: 50 },
    { value: 'Rs 50 to Rs 100', min: 50, max: 100 },
    { value: 'Rs 100 to Rs 200', min: 100, max: 200 },
    { value: 'Rs 200 to Rs 500', min: 200, max: 500 },
    { value: 'Rs 500 And Above', min: 500, max: Infinity },
  ];

  const handleCheckboxChange = (rangeValue) => {
    if (selectedRange.includes(rangeValue)) {
      setSelectedRange(selectedRange.filter(r => r !== rangeValue));
    } else {
      setSelectedRange([...selectedRange, rangeValue]);
    }
    setCurrentPage(1); // Reset to first page on filter change
  };

  const activeRanges = priceRanges.filter(range => selectedRange.includes(range.value));

  const filteredProducts =
    selectedRange.length === 0
      ? nonVegProducts
      : nonVegProducts.filter(product =>
          activeRanges.some(range => product.price >= range.min && product.price <= range.max)
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="veg-container">
      <ToastContainer position='top-right' autoClose = {2000}/>
      <div className="filters">
        <h2>Filter by Price</h2>
        {priceRanges.map(range => (
          <label key={range.value} className="filter-option">
            <input
              type="checkbox"
              checked={selectedRange.includes(range.value)}
              onChange={() => handleCheckboxChange(range.value)}
            />
            {range.value}
          </label>
        ))}
        <button className="clear-btn" onClick={() => setSelectedRange([])}>
          Clear All Filters
        </button>
      </div>

      <div className="items-section">
        <h2>Non Veg Items</h2>
        <ul className="item-list">
          {currentItems.map((item, index) => (
            <li key={index} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h5>{item.name}</h5>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => {dispatch(addToCart(item)); 
              toast.success("Product added to cart successfully");
              }}>Add To Cart</button>
            </li>
          ))}
        </ul>

        <div className="pagination-controls">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? 'active-page' : ''}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default NonVeg;
