import "./App.css";
import About from "./pages/About";
import Features from "./pages/Features";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Qualification from "./pages/Qualification";
import Services from "./pages/Services";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Qualification />
      <Project />
      <Features/>
    </div>
  );
}

export default App;
