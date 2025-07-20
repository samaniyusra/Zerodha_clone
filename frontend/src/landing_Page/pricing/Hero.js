import React, { useState } from "react";

function Hero() {
  
    return (
        <div className="container p-5 text-center ">
            <div className="row">
                <h4 className="fs-3 mb-3"> Charges</h4>
                <p className="fs-5"> List of all charges and taxes</p>


                <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                    <img src="/media/images/pricing-eq.svg" style={{ width: "60%" }} />
                    <h2 className="mb-3 lh-lg" > Free equity delivery</h2 >
                    <p> All equity delivery investments (NSE, BSE), <br />
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                    <img src="/media/images/other-trades.svg" style={{ width: "60%" }} />
                    <h2 className="mb-3 lh-lg" >Intraday and F&O trades</h2 >
                    <p> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>


                <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                    <img src="/media/images/pricing-eq.svg" style={{ width: "60%" }} />
                    <h2 className="mb-3 lh-lg" > Free direct MF</h2 >
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges..</p>
                </div>
            </div>
        </div>
    )
}

export default Hero