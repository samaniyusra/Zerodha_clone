import React from "react";

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
               
                <div className="col-lg-6 col-md-12 text-center">
                    <img style={{ width: "90%", maxWidth: "500px" }} src={imageUrl} alt={productName} />
                </div>

           
                <div className="col-lg-6 col-md-12">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="lh-lg mb-4" style={{ maxWidth: "500px" }}>{productDescription}</p>

                    <div className="mb-4 d-flex gap-4">
                        <a style={{ textDecoration: "none", color: "#1a73e8" }} href="#">{tryDemo || "Try demo"} →</a>
                        <a style={{ textDecoration: "none", color: "#1a73e8" }} href="#">{learnMore || "Learn more"} →</a>
                    </div>

                    <div className="d-flex gap-3">
                        {googlePlay && <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>}
                        {appStore && <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store" /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
