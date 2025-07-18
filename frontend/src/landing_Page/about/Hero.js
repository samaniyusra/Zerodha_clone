import React from "react";

function Hero() {
    return (
        <div className="container">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "300px",
                    backgroundColor: "#fff", // Optional: use background if needed
                    textAlign: "center",
                    padding: "40px 20px",
                }}
            >
                <div style={{ maxWidth: "800px" }}>
                    <h4 style={{ fontWeight: "400", color: "#222", lineHeight: "1.6" }}>
                        We pioneered the discount broking model in India. <br />
                        Now, we are breaking ground with our technology.
                    </h4>
                </div>
            </div>

            <div className="container ht-4">
                <div className="row border-top mb-5 p-2">
                    <div className="col-lg-6 col-md-8 col-sm-12 lh-lg mt-5 p-2 ">

                        <p className="mt-2 "> We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier</p>
                        <p> Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p> Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12 mt-5 p-3 lh-lg">

                        <p> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p> Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p> And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>

            </div>

        </div>




    );
}

export default Hero;
