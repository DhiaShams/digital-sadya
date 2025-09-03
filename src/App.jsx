import { useState } from "react";
import SadyaPlate from "./components/SadyaPlate";
import DishModal from "./components/DishModal";

function App() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 flex flex-col items-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        🌼 Digital Onam Sadya 🌼
      </h1>

      <SadyaPlate onDishClick={(dish) => setSelectedDish(dish)} />

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}

export default App;
