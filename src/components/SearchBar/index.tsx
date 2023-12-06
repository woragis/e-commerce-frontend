import React from "react";
import { FaSearchengin } from "react-icons/fa6";
import { StyledSearchBar } from "./style";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type='text' name='search' id='search' />
      <button className='icon'>
        <FaSearchengin />
      </button>
      <div className='icon-container'></div>
    </StyledSearchBar>
  );
};

export default SearchBar;
