import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";
import { GiHotMeal } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";

const Sidenav = () => {
  return (
    <div className="opacity-100 h-full text-white  bg-background bg-cover">
      <div className="justify-center items-center flex flex-col py-5">
        <img src="/logos.png" alt="" width={130} height={130} />
        <p
          className="text-lg"
          style={{
            fontFamily: "Dancing Script",
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          Meal Maple
        </p>
      </div>
      <div className=" py-4 flex flex-col items-center justify-center">
        <ul>
          <li className="flex flex-row p-4 text-md">
            <NavLink
              to="/"
              className="flex items-center text-lg hover:text-amber-400"
              activeClassName="text-amber-400"
            >
              <RiHome4Fill size={30} className="pr-2" />
              <span className="text-only">Home</span>
            </NavLink>
          </li>
          <li className="flex flex-row p-4 text-md">
            <NavLink
              to="/all"
              className="flex items-center text-lg hover:text-amber-400"
              activeClassName="text-amber-400"
            >
              <GiHotMeal size={30} className="pr-2" />
              <span className="text-only">All Recipes</span>
            </NavLink>
          </li>
          <li className="flex flex-row p-4 text-md">
            <NavLink
              to="/breakfast"
              className="flex items-center text-lg hover:text-amber-400"
              activeClassName="text-amber-400"
            >
              <MdWbSunny size={30} className="pr-2" />
              <span className="text-only">Breakfast Recipes</span>
            </NavLink>
          </li>
          <li className="flex flex-row p-4 text-md">
            <NavLink
              to="/lunch"
              className="flex items-center text-lg hover:text-amber-400"
              activeClassName="text-amber-400"
            >
              <MdLunchDining size={30} className="pr-2" />
              <span className="text-only">Lunch Recipes</span>
            </NavLink>
          </li>
          <li className="flex flex-row p-4 text-md">
            <NavLink
              to="/dinner"
              className="flex items-center text-lg hover:text-amber-400"
              activeClassName="text-amber-400"
            >
              <MdDinnerDining size={30} className="pr-2" />
              <span className="text-only">Dinner Recipes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
