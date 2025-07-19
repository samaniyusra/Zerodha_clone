import React from "react";

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
              
                <div className="col-lg-6 col-md-12">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="lh-lg mb-4" style={{ maxWidth: "500px" }}>{productDescription}</p>

                    <div className="mb-4 d-flex gap-4">
                        <a style={{ textDecoration: "none", color: "#1a73e8" }} href="#">{learnMore || "Learn more"} →</a>
                    </div>
                </div>

               
                <div className="col-lg-6 col-md-12 text-center">
                    <img style={{ width: "90%", maxWidth: "500px" }} src={imageUrl} alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
