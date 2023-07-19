import "./App.css";
import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
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
    </div>
  );
}

export default App;
