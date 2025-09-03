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
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      {/* Sadya plate container */}
      <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto">
        {/* Background image */}
        <img
          src="/src/assets/sadya.png"
          alt="Traditional Onam Sadya"
          className="w-full h-full object-contain rounded-2xl shadow-2xl"
        />
        
        {/* Interactive hotspots */}
        {sadyaItems.map((dish, index) => {
          const { left, top, right, bottom } = dish.coordinates;
          const width = right - left;
          const height = bottom - top;
          
          return (
            <div
              key={index}
              className="absolute cursor-pointer group transition-all duration-300 ease-out"
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
              {/* Hotspot overlay */}
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20 border-2 border-transparent group-hover:border-amber-400 group-hover:bg-amber-400/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg backdrop-blur-sm">
                {/* Pulse animation on mobile */}
                <div className="md:hidden absolute inset-0 rounded-lg bg-amber-400/40 animate-pulse" />
              </div>
              
              {/* Hover tooltip for desktop */}
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
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm md:text-base">
          <span className="hidden md:inline">Hover over or click</span>
          <span className="md:hidden">Tap</span>
          {' '}any dish to discover its story and cultural significance
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