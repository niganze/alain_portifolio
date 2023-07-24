import "./App.css";
// import Dashnavbar from "./dashboard/desboardpage/Dashnavbar";
import Generalsite from "./pages/Generalsite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Generalsite />}/>
          {/* <Route path="/dashboard" element={< Das/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
