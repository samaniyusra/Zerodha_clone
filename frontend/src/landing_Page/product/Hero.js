import React from "react";

function Hero() {
    return (
        <div className="container p-5 mb-3 border-bottom " style={{height: "341px"}}>
            <div className="row text-center">
                <h1 className="mt-5">Zerodha Products </h1>

                <p className="mt-2">Sleek, modern, and intuitive trading platforms</p>
               <p> Check out our <a style = {{textDecoration: "none"}}href=""> investment offerings → </a> </p>
            </div>
        </div>
    )
}

export default Hero