import React from "react";

function Team() {
    return (
        <div className="container">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{

                    backgroundColor: "#fff", // Optional: use background if needed
                    textAlign: "center",

                }}
            >
                <div>
                    <h2 style={{ fontWeight: "400", color: "#222" }}>
                        People
                    </h2>
                </div>
            </div>


            <div className="row mb-5 p-2">
                <div className="col-lg-6 col-md-8 col-sm-12 lh-lg mt-5 p-2 d-flex justify-content-center">
                    <div className="text-center">
                        <img
                            src="/media/images/profile.jpeg"
                            style={{
                                height: "295px",
                                width: "295px",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                            alt="Profile"
                        />
                        <h5 className="mt-3">Samani Yusrah</h5>
                        <p> Founder, CEO</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-8 col-sm-12 mt-5 p-3 lh-lg">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                    </p>
                    <p>
                       hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p> Playing basketball is his zen.</p>

                    <p> Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
</div>



            )
}

 export  default Team