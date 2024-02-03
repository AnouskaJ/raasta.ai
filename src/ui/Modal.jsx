import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              Close
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
