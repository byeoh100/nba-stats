import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'


function SearchBar() {
    return (
        <div className="search-bar">

            <h1>NBA Statistics tracking,</h1>
            <h1>made&nbsp;<span className='highlight'>visual</span> </h1>
            <div className="search-bar-container">
                <button className="menu-icon">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for players or teams"
                />
                <button className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;