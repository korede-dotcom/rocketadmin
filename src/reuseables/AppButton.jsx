import React from "react";
import { styled } from "styled-components";

function Appbutton({ placeholder, onClick, style }) {
  return (
    <Content>
      <div className="btn" onClick={onClick}>
        <button style={style}>{placeholder}</button>
      </div>
    </Content>
  );
}

export default Appbutton;
const Content = styled.div`
  .btn button {
    width: 7vw;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
`;
