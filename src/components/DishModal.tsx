import React, { useEffect } from 'react';
import { X, Utensils, Leaf, Heart, Volume2 } from 'lucide-react';
import { speak } from '../utils/speak';

interface SadyaItem {
  name: string;
  malayalam: string;
  ingredients: string[];
  significance: string;
  image?: string;
}

interface DishModalProps {
  dish: SadyaItem;
  onClose: () => void;
}

const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-t-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex items-center gap-4">
            {/* Dish Image */}
            {dish.image && (
              <img
                src={dish.image}
                alt={dish.name}
                className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
              />
            )}

            <div className="flex-1 pr-8">
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                {dish.name}
                <button
                  onClick={() => speak(dish.malayalam, "ml-IN")}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition"
                  aria-label="Hear pronunciation"
                  type="button"
                >
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
              </h2>
              <p className="text-amber-100 text-lg font-medium">{dish.malayalam}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Ingredients */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Utensils className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Ingredients</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-100"
                >
                  <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural significance */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-800">Cultural Significance</h3>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed text-sm">
                {dish.significance}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishModal;