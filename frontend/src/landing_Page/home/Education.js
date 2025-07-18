import React from "react";

function Education() {
    return(
      <div className="container p-5 mb-5"> 
      <div className="row "> 
       <div className="col-lg-6 col-md-8 col-sm-12"> 
        <img src = "/media/images/education.svg"  style={{width: "65%"}}/> 
       </div>

       <div className="col-lg-6 col-md-8 col-sm-12"> 
        <h1 className="flex-wrap mb-5"> Free and open market education</h1>
        <p className="mb-3"> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' className="text-decoration-none mb-5 ">Varsity <i class="fa-solid fa-arrow-right "></i></a>
          <p className=" mt-5 mb-3"> TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
           <a href='' className="text-decoration-none">    TradingQ&A  <i class="fa-solid fa-arrow-right "></i></a>
      
       </div>
      </div>
      </div>
    )
}


export default Education;