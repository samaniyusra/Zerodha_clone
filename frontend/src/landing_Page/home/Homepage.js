import React from "react";
import Hero from "./Hero.js"
import Awards from "./Awards.js";
import Stats from "./Stats.js";
import Eduction from "./Education.js"
import Pricing from "./Pricing.js";
import OpenAccount from "../../OpenAccount.js";
import Navbar from "../../Navbar.js"
import Footer from "../../Footer.js";

function HomePage() {
    return(
  <>

  <Hero /> 
  <Awards /> 
  <Stats /> 
  <Pricing />
  <Eduction /> 
  <OpenAccount /> 


  </>
    )
}


export default HomePage;