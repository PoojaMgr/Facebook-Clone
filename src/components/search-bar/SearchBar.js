import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search__input">
         <SearchIcon className="search__inputIcon"/>
          <input type="search" placeholder="Search for your product"/>
      </div>
    </div>
  );
};

export default SearchBar;
