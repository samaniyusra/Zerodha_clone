import React from "react";


function Universe() {
    return (
        <div className="container my-5">

            <div className=" row text-center mb-5 p-5">
                <p className="fs-5  mb-5">
                    Want to know more about our technology stack? Check out the{" "}
                    <a style={{ textDecoration: "none" }} href="#">Zerodha.tech</a> blog.
                </p>
                <h3 className="fw-bold mt-4 mb-3">The Zerodha Universe</h3>
                <p className="fs-5">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/sensibullLogo.svg" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8">Options trading platform that lets you <br />
                        create strategies, analyze positions, <br />
                        data points like open interest, FII/DII, and more.</p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/zerodhaFundhouse.png" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8"> "Our asset management venture <br />
                        that is creating simple and transparent  <br />
                        funds to help you save for your goals</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/tijori.svg" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8"> Investment research platform <br />
                        that offers detailed insights on stocks, <br />
                        sectors, supply chains, and more.</p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/streakLogo.png" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8"> "Our asset management venture <br />
                        that is creating simple and transparent  <br />
                        funds to help you save for your goals</p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/smallcaseLogo.png" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8"> Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.</p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-3">
                    <img src="/media/images/dittoLogo.png" style={{ width: "50%" }} />
                    <p className="mt-3 fs-8"> Personalized advice on life <br />
                        and health insurance. No spam <br />  and no mis-selling.</p>
                </div>
                <button style={{ width: "20%", margin: "0 auto" }} className="p-2 mt-3 mb-5 fs-5 btn btn-primary"> Signup for free</button>

            </div>
        </div>
    );
}

export default Universe;
