import React from "react";
import TodayDate from "../TodayDate";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiBookReader } from "react-icons/bi";
const Topnav = () => {
  return (
    <div className="text-black shadow-lg p-1">
      <di className="flex justify-between items-center">
        <div>
          <p className="font-bold text-3xl">All Recipes</p>
          <TodayDate />
        </div>
        <div className="flex justify-between w-32">
          <a href="">
            <IoNotificationsOutline size={25} />
          </a>
          <a href="">
            <BiBookReader size={25} />
          </a>
          <a href="">
            <img
              src="/src/assets/Janet.jpeg"
              alt=""
              width={35}
              height={35}
              className="rounded-3xl border border-yellow-900"
            />
          </a>
        </div>
      </di>
    </div>
  );
};

export default Topnav;
