import React, { useState } from 'react';

const Equipment = ({ equipment, level, grade, effects }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openDetails = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-6 border border-gray-700 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">Minions</h2>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(equipment).map(([slot, item]) => (
          <div
            key={slot}
            className="border border-gray-700 bg-gray-800 rounded-lg p-6 text-center shadow-md hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            onClick={() => openDetails(item)}
          >
            <h4 className="text-lg font-semibold text-blue-300">{slot.toUpperCase()}</h4>
            <p className="text-gray-300">{item.name}</p>
            <p className="text-sm text-gray-500">Grade: {item.grade}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeDetails} 
        >
          <div
            className="bg-gray-900 text-white rounded-lg p-6 w-96 shadow-xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Detalhes do Item</h3>
              <button
                className="text-red-500 text-xl font-bold"
                onClick={closeDetails}
              >
                X
              </button>
            </div>
            <p className="text-lg font-semibold">{selectedItem.name}</p>
            <p className="text-sm text-gray-400">Grade: {selectedItem.grade}</p>
            <p className="text-sm text-yellow-400 font-semibold mt-4">Efeito:</p>
            <p className="text-gray-300">{selectedItem.effect}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipment;
