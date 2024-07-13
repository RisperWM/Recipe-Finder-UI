import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background text-white p-6 rounded-lg shadow-lg relative w-4/5 max-w-2xl">
        <button className="absolute top-0 right-0 p-2 text-amber-500" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
