import React from "react";

function Hero() {
    return(
   <div className="container p-5 mb-5"> 
   <div className="row text-center">
    <img src="/media/images/homeHero.png" className="mb-5" />
       


       <h1 className="mt-5">Invest in everything </h1>

       <p className="mt-2"> Online platforms to invest in stocks,derivatives,mutual funds and more</p>
       <button style = {{width: "20%", margin: "0 auto"}}className="p-2 mt-3 mb-5 fs-5 btn btn-primary"> Signup now</button>
</div>
   </div>
    )
}


export default Hero;