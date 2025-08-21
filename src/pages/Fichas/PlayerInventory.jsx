import React, { useState } from 'react';
import {Itemm} from './utils/Styles';
import iitems from "./utils/ItensColor.json"
import Character from './PlayerCard';

const Inventory = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">Inventário</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 bg-gray-800 rounded-lg p-4 text-center shadow-md hover:bg-gray-700 transition cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
      
              <Itemm bgColor={iitems[item.name]?.color || "white"}>
                {item.name}
              </Itemm>


            <p className="text-gray-400">{item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Modal com informações do efeito do item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-blue-300">{selectedItem.name}</p>
              <button
                className="text-red-500 font-bold text-xl"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <p className="text-gray-400">Quantidade: {selectedItem.quantity}</p>
            <p className="text-yellow-400 font-semibold mt-2">Efeito:</p>
            <p className="text-gray-300">{selectedItem.effect}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
