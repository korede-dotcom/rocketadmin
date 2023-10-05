import React from "react";
import AppInput from "../reuseables/AppInput";
import Modal from "../reuseables/Modal";
import { styled } from "styled-components";
import Appbutton from "../reuseables/Appbutton";

function InviteAgent({ closeinviteAgent }) {
  return (
    <Content>
      <Modal title="Invite Agent" onClick={() => closeinviteAgent(false)}>
        <div className="name">
          <label>Agent Name</label>
          <AppInput placeholder="Enter name" width="93%" />
        </div>
        <div className="name">
          <label>Agent Email Address</label>
          <AppInput placeholder="Enter email" width="93%" />
        </div>
        <div className="btn">
          <Appbutton
            placeholder="Cancel"
            style={{
              backgroundColor: "transparent",
              border: "1px solid gainsboro",
            }}
            onClick={() => closeinviteAgent(false)}
          />
          <Appbutton
            placeholder="Invite"
            style={{
              backgroundColor: "#00A85A",
              color: "white",
              border: "1px solid #00A85A",
            }}
          />
        </div>
      </Modal>
    </Content>
  );
}

export default InviteAgent;
const Content = styled.div`
  .name {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .name label {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #344054;
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
`;
