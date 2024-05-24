import "./App.css";
import Features from "./componets/HomePage/Features/Features";
import Banner from "./componets/HomePage/banner/Bannar";
import BrowserSupport from "./componets/HomePage/browserSupport/BrowserSupport";
import Paging from "./componets/HomePage/paging/Paging";
import Pricing from "./componets/HomePage/price/Pricing";
import Rating from "./componets/HomePage/rating/Rating";
import Footer from "./componets/footer/Footer";
import Navbar from "./componets/navbar/Navbar";

const App = () => {
  return (
    <main className="absolute pointer-events-none w-full">
      <Navbar />
      <Banner />
      <Rating />
      <Pricing />
      <Paging />
      <BrowserSupport />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
