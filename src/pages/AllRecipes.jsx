import React, { useState } from "react";
import Topnav from "../components/nav/Topnav";
import Modal from "../components/Modal";
import AddForm from "../components/table/AddForm";
import RecipeList from "../components/table/RecipeList";

const AllRecipes = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="text-black p-3">
      <Topnav />
      <div className="flex">
        <button
          className="bg-slate-800 text-white font-semibold px-3 py-2 rounded-md ml-auto mt-10 hover:bg-orange-400"
          onClick={handleOpenModal}
        >
          Add New Button
        </button>
      </div>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <AddForm />
      </Modal>
      <div>
        <RecipeList/>
      </div>
    </div>
    
  );
};

export default AllRecipes;
