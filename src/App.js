import Features from "./components/features/Features";
import Header from "./components/header/Header";
import FAQ from "./components/faq/FAQ";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Navbar/>
     <Header/>
    <Features/>
    <Subscribe/>
    <Download/>
    <FAQ/>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
