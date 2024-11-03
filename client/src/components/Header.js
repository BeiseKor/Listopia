import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaCalendarAlt, FaBars } from 'react-icons/fa';

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery); // Передаем запрос поиска в родительский компонент
  };

  return (
    <header className="header">
      <button className="back-button">
        <FaArrowLeft />
      </button>
      <h1>Family</h1>
      <div className="header-right">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <button onClick={handleSearchClick} className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </div>
        <FaCalendarAlt className="icon" />
        <FaBars className="icon" />
      </div>
    </header>
  );
}

export default Header;