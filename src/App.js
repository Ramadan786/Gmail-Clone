
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <SideBar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
