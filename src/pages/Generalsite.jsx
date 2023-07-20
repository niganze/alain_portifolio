import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
import Qualification from "./Qualification";
import Services from "./Services";


function Generalsite() {
  return (
    <div>
    <Header/>
    <Home />
    <Services/>
    <About/>
    <Qualification/>
    <Project/>
    <Features/>
    <Contact/>
    <Blog />
    <Footer/>
    </div>
  );
}

export default Generalsite