import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";

function SearchInput({ value, onChange, placeholder }) {
  return (
    <Content>
      <div className="search">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </Content>
  );
}

export default SearchInput;
const Content = styled.div`
  .search {
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 20px;
    gap: 10px;
    width: 100%;
    max-width: 16vw;
    border-radius: 5px;
  }
  .search input {
    border: none;
    width: 100%;
    font-size: 16px;
  }
  .search ::placeholder {
    font-size: 16px;
  }
`;
