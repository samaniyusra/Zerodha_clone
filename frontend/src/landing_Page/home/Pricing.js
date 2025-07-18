import React from "react";

function Pricing() {
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 p-5" >
                    <h1 className="mb-4"> Unbeatable pricing</h1>
                    <p className="fs-6">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>

                    <a href='' className="text-decoration-none"> see Pricing  <i class="fa-solid fa-arrow-right "></i></a>
                </div>

                <div className="col-lg-6 col-md-8 col-sm-12 p-5">
                    <div className="row p-5">
                        <div className="col-4">
                            <img src="/media/images/pricing-eq.svg" />
                            <p className="fs-8 text-center"> free account opening</p>
                        </div>
                        <div className="col">
                            <img src="/media/images/pricing-eq.svg" />
                            <p className="fs-8 text-center"> Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className="col">
                            <img src="/media/images/other-trades.svg" />
                            <p className="fs-8 text-center"> Intraday and
F&O</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Pricing;