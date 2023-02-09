import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screen/Home";
import MonthStatistics from "./screen/MonthStatistics";
import Header from "./components/Header";
import { Popup } from "./components/Popup";
import { Item } from "./components/ThisDayInfo";

function App() {
  return (
    <div className="app">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mounth-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
