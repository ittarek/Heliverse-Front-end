import { useState } from "react";
import "./App.css";
import Features from "./componets/HomePage/Features/Features";
import Banner from "./componets/HomePage/banner/Bannar";
import BrowserSupport from "./componets/HomePage/browserSupport/BrowserSupport";
import Paging from "./componets/HomePage/paging/Paging";
import Pricing from "./componets/HomePage/price/Pricing";
import Rating from "./componets/HomePage/rating/Rating";
import Footer from "./componets/footer/Footer";
import Navbar from "./componets/navbar/Navbar";
import GradientCursor from "./componets/GsapCursor/GradientCursor";


const App = () => {

  const [isActive, setIsActive] = useState(false);
  

  return (
    <main>
    
      <div
        className=""
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <GradientCursor isActive={isActive} />
        <Navbar />
        <Banner />
        <Rating />
        <Pricing />
        <Paging />
        <BrowserSupport />
        <Features />
        <Footer /> 
    
      </div>
    </main>
   

   
  );
};

export default App;
