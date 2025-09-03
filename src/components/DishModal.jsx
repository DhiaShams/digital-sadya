import { motion, AnimatePresence } from "framer-motion";

const DishModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-yellow-700">{dish.name}</h2>
          <p className="italic text-gray-600">{dish.malayalam}</p>

          <h3 className="mt-4 font-semibold">🥗 Ingredients</h3>
          <ul className="list-disc pl-5">
            {dish.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold">🌸 Significance</h3>
          <p className="text-gray-700">{dish.significance}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DishModal;
