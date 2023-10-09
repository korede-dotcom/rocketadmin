import React from "react";
import { styled } from "styled-components";

function AddNewBeneficiary({ closeBeneficiary }) {
  return (
    <Content>
      <div className="top">
        <div className="back" onClick={() => closeBeneficiary(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 12.2734L19.25 12.2734"
              stroke="#00A85A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2998 18.299L4.2498 12.275L10.2998 6.25"
              stroke="#00A85A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back to Send Money</span>
        </div>
        <p>Add Beneficiary</p>

        <div className="white">
          <p>Collection Details</p>

          <div className="labels">
            <label>Customer Name</label>
            <input type="text" placeholder="Jane Doe" />
          </div>
        </div>
      </div>
    </Content>
  );
}

export default AddNewBeneficiary;

const Content = styled.div`
  .labels {
    display: flex;
    gap: 280px;
  }
  .labels label {
    font-size: 18px;
    color: #344054;
  }
  .labels input {
    width: 50%;
    border: 1px solid gainsboro;
    border-radius: 5px;
    padding: 15px;
    font-size: 15px;
  }
  .back {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 40px;
  }
  .top p {
    font-size: 32px;
    font-weight: 500;
    line-height: 28px;
  }
  .white {
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .white p {
    font-size: 20px;
  }
`;
