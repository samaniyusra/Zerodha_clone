import React, { useState } from "react";
import "./brokerage.css";
function Brokerage() {


    let [activeTab, setActiceTab] = useState("equity")

    let handleClick = (tabname) => {
        setActiceTab(tabname)
    }
    return (
        <div className="container">
            <div style={{ display: "flex", gap: "40px", alignItems: "center", marginLeft: "80px" }} className="border-bottom">
                <p style={{
                    margin: 0,
                    fontSize: "20px",
                    color: activeTab === "equity" ? "#000" : "#387ED1",
                    marginBottom: "20px",
                    cursor: "pointer",
                    borderBottom: activeTab === "equity" ? "3px solid #387ED1" : "none",
                }} onClick={() => handleClick("equity")}
                > Equity</p>
                <p style={{
                    margin: 0,
                    fontSize: "20px",
                    marginBottom: "20px",
                    color: activeTab === "currency" ? "#000" : "#387ED1",
                    borderBottom: activeTab === "currency" ? "3px solid #387ED1" : "none",
                    cursor: "pointer"
                }} onClick={() => handleClick("currency")}>
                    Currency
                </p>
                <p style={{
                    margin: 0,
                    fontSize: "20px",
                    marginBottom: "20px",
                    color: activeTab === "commodity" ? "#000" : "#387ED1",
                    borderBottom: activeTab === "commodity" ? "3px solid #387ED1" : "none",
                    cursor: "pointer"
                }} onClick={() => handleClick("commodity")}>Commodity</p>
            </div>

            {activeTab === "equity" ?
                <div className="mt-5">

                    <table class="table table-bordered " style={{ fontWeight: 250 }}>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" style={{ fontWeight: 450 }}>Equity delivery</th>
                                <th scope="col" style={{ fontWeight: 450 }}>Equity intraday</th>
                                <th scope="col" style={{ fontWeight: 450 }}>F&O - Futures</th>
                                <th scope="col" style={{ fontWeight: 450 }}>	F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>@0.03% or Rs. 20/executed <br />order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed <br /> order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>

                                <td>STT/CTT</td>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.02% on the sell side</td>
                                <td>

                                    <ul>
                                        <li>
                                            0.125% of the intrinsic value on options that are bought and exercised
                                        </li>


                                        <li>
                                            0.1% on sell side (on premium)
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>

                                <td>Transaction charges</td>
                                <td>NSE: 0.00297%
                                    BSE: 0.00375% </td>
                                <td>@NSE: 0.00297%
                                    BSE: 0.00375% </td>
                                <td>  NSE: 0.00173%
                                    BSE: 0</td>
                                <td>NSE: 0.03503% (on premium)
                                    BSE: 0.0325% (on premium)</td>
                            </tr>

                            <tr>

                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>

                            <tr>

                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>

                            <tr>

                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy sider</td>
                            </tr>
                        </tbody>
                    </table>
                </div> : null
            }


            {activeTab === "currency" ?
                <div>

                    <table class="table table-bordered" style={{ fontWeight: 250 }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ fontWeight: 450 }}></th>
                                <th scope="col" style={{ fontWeight: 450 }}>Currency futures</th>
                                <th scope="col" style={{ fontWeight: 450 }}>Currency options</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Brokerage</td>
                                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                <td>₹ 20/executed order</td>
                            </tr>
                            <tr>

                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>

                                <td>Transaction charges</td>
                                <td>NSE: 0.00035%
                                    BSE: 0.00045%</td>
                                <td>NSE: 0.0311%
                                    BSE: 0.001%</td>
                            </tr>

                            <tr>

                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>

                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>

                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div> : null
            }

            {activeTab === "commodity" ?
                <div>
                    <table class="table table-bordered" >
                        <thead>
                            <tr>
                                <th></th>
                                <th style={{ fontWeight: 450 }}>Commodity futures</th>
                                <th style={{ fontWeight: 450 }}>Commodity options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>
                                    MCX: 0.0021% <br />
                                    NSE: 0.0001%
                                </td>
                                <td>
                                    MCX: 0.0418% <br />
                                    NSE: 0.001%
                                </td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>
                                    Agri: ₹1 / crore <br />
                                    Non-agri: ₹10 / crore
                                </td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div> : null
            }


        <p className="text-center fs-5 mt-4"> <a style = {{textDecoration: "none"}}href = ""> Calculate your costs upfront</a> using our brokerage calculator</p>
        </div >


    )
}

export default Brokerage