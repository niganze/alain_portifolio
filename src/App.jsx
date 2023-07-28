import "./App.css";
import Dashnav from "./dashboard/Dashnav";
import Generalsite from "./pages/Generalsite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Generalsite />}/>
          <Route path="/dashboard"element={<Dashnav/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
