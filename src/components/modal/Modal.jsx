import { X } from "@phosphor-icons/react";
import React from "react";

const Modal = ({ open, onClose, children, width = 400 }) => {
  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`fixed z-10000 inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 backdrop-blur-xs" : "invisible"
      }`}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: `${width}px` }}
        className={`bg-white rounded-xl shadow-lg px-12 py-8 transition-all ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="fixed top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-600 transition-all duration-100"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
