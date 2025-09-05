import React, { useState } from 'react';
import sadyaItems from '../data/sadyaItems';
import DishModal from './DishModal';

interface SadyaItem {
  name: string;
  malayalam: string;
  ingredients: string[];
  significance: string;
  coordinates: { left: number; top: number; right: number; bottom: number };
}

const SadyaPlate: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<SadyaItem | null>(null);
  const [hoveredDish, setHoveredDish] = useState<SadyaItem | null>(null);

  const handleDishClick = (dish: SadyaItem) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-7">
      {/* Sadya plate container */}
      <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto">
        {/* Background image */}
        <img
          src="/assets/sadya.png"
          alt="Traditional Onam Sadya"
          className="w-full h-full object-contain rounded-2xl shadow-[0_4px_20px_0_rgba(0,0,0,0.3),0_-4px_20px_0_rgba(0,0,0,0.2)]"
        />



        {/* Interactive hotspots */}
        {sadyaItems.map((dish, index) => {
          const { left, top, right, bottom } = dish.coordinates;
          const width = right - left;
          const height = bottom - top;

          return (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: `${(left / 650) * 100}%`,
                top: `${(top / 450) * 100}%`,
                width: `${(width / 650) * 100}%`,
                height: `${(height / 450) * 100}%`,
              }}
              onClick={() => handleDishClick(dish)}
              onMouseEnter={() => setHoveredDish(dish)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Tooltip for desktop */}
              {hoveredDish === dish && (
                <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-48 max-w-64">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">
                      {dish.malayalam}
                    </p>
                    <p className="text-xs text-gray-500">
                      Click to learn more
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="text-center mt-8">
        <p className="text-gray-700 text-sm md:text-base bg-white/70 px-4 py-2 rounded-full inline-block shadow-sm">
          Tap on any dish to learn more about its tradition and recipe
        </p>
      </div>

      {/* Modal */}
      {selectedDish && (
        <DishModal dish={selectedDish} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SadyaPlate;