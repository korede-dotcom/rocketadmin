import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import BodyLayout from "../../reuseables/BodyLayout";
import CountryFlag from "react-country-flag";

import { styled } from "styled-components";
import CountryDropdown from "../../reuseables/CountryDropdown";
import CustomTable from "../../reuseables/CustomTable";
import PaymentType from "../../Graphs/PaymentType";
import { loadericon } from "../../../public/ICON";
import Transactions from "../../Graphs/Transactions";
import TransactionRecord from "../../ChartComponent/TransactionRecord";
import PaymentTypeRecord from "../../ChartComponent/PaymentTypeRecord";
import BranchWise from "../../TableComponent/BranchWise";
import CountryRates from "../../TableComponent/CountryRates";
import Transferlist from "../../TableComponent/Transferlist";
import NewCustomerList from "../../TableComponent/NewCustomerList";
import GreenCardIcon from "../../assets/icons/GreenCard";
import PersonIcon from "../../assets/icons/PersonIcon";
import YellowCardIcon from "../../assets/icons/YellowCardIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import NavigateIcon from "../../assets/icons/NavigateIcon";
import ManageIcon from "../../assets/icons/Manage";
import PaymentType2 from "../../Graphs/PaymentType2";
import TransactionsChart from "../../Graphs/TransactionsChart";
import { useQuery } from "@tanstack/react-query";
import {
  getPayoutClientDashboard,
  getPayoutDashboard,
} from "../../services/PayoutDashboard";
import { useSearchParams } from "react-router-dom";
import { kFormatter, kFormatter2, kFormatter4 } from "../../utils/format";
function PayoutDashboard() {
  const [userID, setUserID] = useState();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  //const [params] = useSearchParams()
  const { data: payoutDashboard } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getPayoutClientDashboard(userDetails?.userId),
  });

  const id = userID;

  const cardDetails = payoutDashboard?.data?.transactionVolume?.NGN;

  console.log();

  return (
    <>
      <BodyLayout>
        <Content>
          <div className="content1">
            <div className="contside2">
              <div className="contside2down">
                <div className="contside2childdown">
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid rgba(213, 219, 229, 1)",
                      marginLeft: "20px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translateX(-2px)",
                      }}
                    >
                      <PersonIcon />
                      <div
                        style={{
                          color: "#909090",
                        }}
                      >
                        Total Giveaways
                      </div>
                    </div>
                    <div style={{ fontSize: "40px", fontWeight: "600" }}>
                      200
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid rgba(213, 219, 229, 1)",
                      marginLeft: "20px",
                    }}
                  >
                    <div
                      onClick={() => {
                        refetch(id);
                        setUserID(1);
                      }}
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translateX(-2px)",
                      }}
                    >
                      <PersonIcon />
                      <div
                        style={{
                          color: "#909090",
                        }}
                      >
                        {" "}
                        Total Transaction Count
                      </div>
                    </div>
                    <div style={{ fontSize: "40px", fontWeight: "600" }}>
                      {kFormatter4(
                        cardDetails?.successful +
                          cardDetails?.pending +
                          cardDetails?.failed
                      )}
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid rgba(213, 219, 229, 1)",
                      marginLeft: "20px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translateX(-2px)",
                      }}
                    >
                      <GreenCardIcon />
                      <div
                        style={{
                          color: "#909090",
                        }}
                      >
                        Successful
                      </div>
                    </div>
                    <div style={{ fontSize: "40px", fontWeight: "600" }}>
                      {kFormatter4(cardDetails?.successful)}
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid rgba(213, 219, 229, 1)",
                      marginLeft: "20px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translateX(-2px)",
                      }}
                    >
                      <YellowCardIcon />
                      <div
                        style={{
                          color: "#909090",
                        }}
                      >
                        Pending
                      </div>
                    </div>
                    <div style={{ fontSize: "40px", fontWeight: "600" }}>
                      {kFormatter4(cardDetails?.pending)}
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translateX(-2px)",
                      }}
                    >
                      <DeleteIcon />
                      <div
                        style={{
                          color: "#909090",
                        }}
                      >
                        Failed
                      </div>
                    </div>
                    <div style={{ fontSize: "40px", fontWeight: "600" }}>
                      {kFormatter4(cardDetails?.failed)}
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      padding: "27px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "white",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <NavigateIcon />
                    <div style={{ fontSize: "20px" }}>View Gateways</div>
                  </div>
                  <div
                    style={{
                      marginTop: "22px",
                      padding: "27px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "white",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <ManageIcon />
                    <div style={{ fontSize: "20px" }}>Manage Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bar Chart Components Stamp */}
          <div className="PaymentTypeChart">
            <div className="Payment">
              <div className="type">
                <p>Payout Type</p>
                <span>Shows a snapshot of payment types of your business</span>
              </div>
              <div className="paymentmethod">
                <div className="card">
                  <div className="color1"></div>
                  <span>Pay By Card</span>
                </div>
                <div className="card">
                  <div className="color2"></div>
                  <span>Pay By Cash</span>
                </div>
                <div className="card">
                  <div className="color3"></div>
                  <span>Bank Transfer</span>
                </div>
                <div className="card">
                  <div className="color4"></div>
                  <span>Pay By Bank</span>
                </div>
              </div>
              <PaymentType />
            </div>
            {/* Three Shold Stamp */}
            <div className="Payment">
              <div className="type">
                <p>Transactions</p>
                <span>Shows a snapshot of payment types of your business</span>
              </div>
              <div className="paymentmethod">
                <div className="card">
                  <div
                    className="color1"
                    style={{
                      background: "#46A246",
                    }}
                  ></div>
                  <span>Successful</span>
                </div>
                <div className="card">
                  <div
                    className="color2"
                    style={{
                      background: "#CBC7C6",
                    }}
                  ></div>
                  <span>Pending</span>
                </div>
                <div className="card">
                  <div
                    className="color3"
                    style={{
                      background: "#D94040",
                    }}
                  ></div>
                  <span>Failed</span>
                </div>
              </div>
              <TransactionsChart />
            </div>
          </div>

          {/* Transaction Chart Stamp */}

          <Transferlist />
          <NewCustomerList />
        </Content>
      </BodyLayout>
    </>
  );
}

const Content = styled.div`
  .limit {
    display: flex;
    justify-content: space-between;
  }
  .limit p {
    font-size: 14px;
    font-weight: 500;
    color: #5a6376;
  }
  .limit span {
    color: #464f60;
    font-weight: 500;
    font-size: 14px;
  }
  .feeslimit {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 20px 20px 20px;
  }
  .score {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 40px 20px 20px 20px;
  }
  .score span {
    font-size: 16px;
    font-weight: 400;
    color: #5a6376;
    line-height: 19.36px;
  }
  .flexhold {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .monthlyThreshold {
    background-color: white;
    border-radius: 10px;
  }
  .PaymentTypeChart {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 0px 30px 0px;
    gap: 10px;
  }
  .PaymentTypeChart2 {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 0px 30px 0px;
    gap: 10px;
  }
  .Payment {
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
  }
  .type {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .type p {
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
  }
  .type span {
    font-size: 14px;
    font-weight: 500;
    color: #909090;
  }
  .paymentmethod {
    padding: 20px 20px 40px 20px;
    display: flex;
    gap: 20px;
  }
  .color1 {
    background-color: #2a278f;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color2 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color3 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color4 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .card {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .card span {
    font-size: 14px;
    color: #464f60;
    font-weight: 500;
    line-height: 16.94px;
  }
  .content1 {
    overflow: hidden;
    @media screen and (max-width: 40em) {
      width: 100%;
      flex: 1;
    }

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .box2 {
      .boxcont {
        @media screen and (max-width: 40em) {
          justify-content: center;
        }
      }
    }
  }

  .contside1 {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 0.1;
    padding: 2em;
    text-align: center;
    border-radius: 10px;
    @media screen and (max-width: 40em) {
      flex: 1 !important;
    }
    > .contside1Text {
      height: 100%;
      vertical-align: center;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: clamp(3rem, 5vw, 4rem);
      }
    }
  }
  .contside2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    flex: 1;
  }
  .contside22 {
    width: 100%;
    display: flex;
    gap: 10px;
    @media screen and (max-width: 40em) {
      flex: 1 !important;
      flex-direction: column;
    }

    .smallbox {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
      gap: 10px;
      .smallcard {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        background-color: #fff;
        border-radius: 10px;

        @media screen and (max-width: 40em) {
          gap: 8px !important;
          font-size: 10px;
        }
      }
    }
  }
  .contside2up {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2em;
    border-radius: 10px;
    width: 100%;
    gap: 20px;
    .contside2child2 {
      display: flex;

      .box {
        border-right: 1px solid rgba(213, 219, 229, 1);
        padding-inline-start: 30px;
        &:last-of-type {
          border-right: none;
        }
      }
      @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .contside2down {
    display: grid;
    grid-template-columns: 6fr 1.2fr;
    gap: 24px;

    .contside2childdown {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      background-color: #fff;
      /* text-align: center; */
      padding-top: 20px;
      padding-bottom: 20px;
      border-radius: 10px;
      .box2 {
        border-right: 1px solid rgba(213, 219, 229, 1);
        padding-inline-start: 30px;

        display: inline-flex;
        &:last-of-type {
          border-right: none;
        }
      }
      @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

export default PayoutDashboard;
