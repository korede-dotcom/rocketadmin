import React from "react";
import { styled } from "styled-components";
function AppInput({ value, onChange, placeholder, width }) {
  return (
    <Content>
      <div className="top">
        <input
          style={{ width: width }}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </Content>
  );
}

export default AppInput;
const Content = styled.div`
  .top input {
    width: 100%;
    padding: 15px;
    outline: none;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
`;
