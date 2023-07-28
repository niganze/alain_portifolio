import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Become from "./pages/Become.jsx";
import Dashboardshared from "./dashboard/Dashboardshared.jsx";
import Adminhome from "./dashboard/Adminhome.jsx";
import Users from "./dashboard/Users.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/subscribe" element={<Become />} />

        <Route path="/dashboard" element={<Dashboardshared />} >
      <Route index element={<Adminhome/>} />
      <Route path={"/dashboard/users"} element={<Users/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
