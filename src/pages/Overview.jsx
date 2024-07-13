import React, { useState } from "react";
import MealTypeCardsContainer from "../components/cards/MealTypeCardsContainer";
import Topnav from "../components/nav/Topnav";
import Modal from "../components/Modal";
import AddForm from "../components/table/AddForm";
import { IoIosAddCircle } from "react-icons/io";
import RecipeTableFetch from "../components/table/RecipeTableFetch";

const Overview = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="h-dvh w-full">
      <Topnav />
      <div className="mt-5">
        <MealTypeCardsContainer />{" "}
      </div>
      <div>
      <div className="flex">
        <button
          className="bg-slate-800 text-white font-semibold px-3 py-2 rounded-md mt-8  hover:bg-orange-400 flex item-center ml-auto"
          onClick={handleOpenModal}
        >
          Add New Button <IoIosAddCircle color="white" size={22}/>
        </button>
      </div>
        <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
          <AddForm />
        </Modal>
      </div>
      <div className="w-full">
        <RecipeTableFetch/>
      </div>
    </div>
  );
};

export default Overview;
