import React from "react";
import { useSearchParams } from "react-router-dom";
import { getPayoutClientDashboard } from "../../services/PayoutDashboard";
import { useQuery } from "@tanstack/react-query";
import BodyLayout from "../../reuseables/BodyLayout";
import styled from "styled-components";
import { BackTop, Button } from "@arco-design/web-react";

export default function ClientDetailsPage() {
  const [params] = useSearchParams();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const userId = params.get("userId");

  const { data: client, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getPayoutClientDashboard(userId),
  });

  console.log(client);

  return (
    <BodyLayout>
      <Client>
        <div className="topBar">
          <div>
            <div className="back_buttton">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="#00A85A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2998 18.2985L4.2498 12.2745L10.2998 6.24951"
                  stroke="#00A85A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Back to Clients</span>
            </div>

            <div className="top_name">{client?.data?.username}</div>
          </div>

          <div style={{ display: "flex" }}>
            <button className="fund">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99999 2C8.4142 2 8.74999 2.33579 8.74999 2.75V7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41422 13.6642 8.75 13.25 8.75H8.74999V13.25C8.74999 13.6642 8.4142 14 7.99999 14C7.58578 14 7.24999 13.6642 7.24999 13.25V8.75H2.75C2.33579 8.75 2 8.41422 2 8C2 7.58579 2.33579 7.25 2.75 7.25H7.24999V2.75C7.24999 2.33579 7.58578 2 7.99999 2Z"
                  fill="#5A6376"
                />
              </svg>
              <span>Fund Wallet</span>
            </button>
            &nbsp; &nbsp;
            <button className="suspend">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2412_13671)">
                  <path
                    d="M5.3335 8.00016H10.6668M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2412_13671">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Suspend</span>
            </button>
          </div>
        </div>

        <div className="body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div className="left_body">
              <div className="profile">PROFILE</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="rounded-full overflow-hidden w-[8vw] h-[8vw] rounded-fulls mr-[2%]">
                  {/*  <img class="w-full- h-full" src="../../../assets//icon/avatar.png" alt=""> */}
                </div>
                <div>
                  <div className="text-[1.8vw]">Funke Obafemi</div>
                  <div className="text-[1vw] text-[#63666A] mb-[3%]">
                    funkeobafemi@email.com
                  </div>
                  <div className="text-[0.8vw] bg-[#023D7A] text-white w-fit px-[5%] py-[2%] uppercase rounded-md">
                    reseller account
                  </div>
                </div>
              </div>
              <div className="text-[#909090] mt-[4%]">
                Member Since:{" "}
                <span className="text-[#212121]">Fri 28th Jul 2023 3:12pm</span>
              </div>
              <div className="text-[#909090] my-[4%]">
                Login ID: <span className="text-[#212121]">abdsm</span>
              </div>
              <div className="text-[#909090] flex items-center">
                Website Status:{" "}
                <span className="ml-[1.4%] text-[#212121]">hi</span>
              </div>
            </div>
          </div>
        </div>
      </Client>
    </BodyLayout>
  );
}

const Client = styled.div`
  .topBar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .back_buttton {
      display: flex;
      align-items: center;

      span {
        color: #00a85a;
        font-size: 16px;
        margin-left: 10px;
      }
    }

    .top_name {
      font-size: 30px;
      margin-top: 10px;
      font-weight: 600;
    }

    .fund {
      background-color: white;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      padding: 14px 14px;
      border-radius: 6px;
      cursor: pointer;

      span {
        margin-left: 10px;
        font-size: 16px;
      }
    }

    .suspend {
      background-color: #d1293d;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      padding: 14px 18px;
      border-radius: 6px;
      cursor: pointer;

      span {
        margin-left: 10px;
        color: white;
        font-size: 16px;
      }
    }
  }

  .body {
    padding: 20px;
    width: 100%;
    background-color: white;
    border-radius: 20px;

    .left_body {
      width: 100%;

      .profile {
        font-size: 1vw;
        margin-bottom: 10px;
      }
    }
  }
`;
