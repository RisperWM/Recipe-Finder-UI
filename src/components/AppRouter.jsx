import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Sidenav from "./nav/Sidenav";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import AllRecipes from "../pages/AllRecipes";

const AppRouter = () => {
  return (
    <div className="h-full flex">
      <div className="" style={{width:"13%"}}>
        <Sidenav />
      </div>
      <div className="" style={{width:"86%"}}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/all" element={<AllRecipes />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
