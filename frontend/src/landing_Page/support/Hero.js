import React from "react";

function Hero() {
    return (
        <section className="contaoner-fluid" id="supportHero">
            <div className="p-5 mt-5 " id="supportWrapper">
                <h5> Support</h5>
                <a href=""> Track Tickets</a>
            </div>

            <div className="row mt-5 p-5" id="supportRow">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <p className="fs-4">
                        search for an answeror browse help topics to create a ticket
                    </p>
                    <input className="form-control" type="text" placeholder=" Eg: how do i activate F&O..." />
                    <p className="mt-5" id="link"> <a href=""> Track Acccount opening</a> <a href=""> Track segment Activation </a><a href="">intraday</a><a href=""> Margins</a><a href="">Kite User Manual </a></p>
                </div>

                <div className="col-lg-6 col-md-8 col-sm-12"  id= "supporCol">

              <p className="fs-4"> Featured</p>
            <ul style={{listStyleType: "decimal"}}> 
                <li>. current takeoversand delisting - january 2024</li>
                <li>. latest intradayleverages- MIS & CO </li>
            </ul>
                </div>
            </div>

        </section>
    )
}

export default Hero