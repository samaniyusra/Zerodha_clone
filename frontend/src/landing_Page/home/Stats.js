import React from "react";

function Stats() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 fs-7 p-5">
                    <h1 className="mt-5 mb-5">
                        Trust with confidence
                    </h1>

                    <div className="mt-5 mb-5">
                        <h6 className="fs-5 mb-3"> Customer-first always</h6>
                        <p> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    </div>


                    <div className="mt-5 mb-5" >
                        <h6 className="fs-5 mb-3"> No spam or gimmicks</h6>
                        <p> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>

                    <div  className="mt-5 mb-5">
                        <h6 className="fs-5 mb-3"> The Zerodha universe</h6>
                        <p> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>


                    <div  className="mt-5 mb-5">
                        <h6 className="fs-5 mb-3"> Do better with money</h6>
                        <p> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-12 p-5 ">
                      <img src = "/media/images/ecosystem.png" style={{width: "90%"}}/> 
                          <div className = "text-center"> 
                            <a href = '' className="mx-5 text-decoration-none"> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a href = '' className="mx-5 text-decoration-none"> Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                          </div>
                </div>
            </div>
        </div>
    )
}


export default Stats;