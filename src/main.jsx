import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/Login.jsx"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login"element={<Login/>} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
