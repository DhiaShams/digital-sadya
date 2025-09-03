import sadyaItemsComplete from "../data/sadyaItems";
import sadyaImg from "../assets/sadya.png";

const SadyaPlate = ({ onDishClick }) => {
  return (
    <div className="relative mx-auto" style={{ width: "650px" }}>
      {/* Sadya plate image */}
      <img
        src={sadyaImg}
        alt="Onam Sadya"
        className="w-full rounded-lg shadow-xl"
      />

      {/* Hotspots */}
      {sadyaItemsComplete.map((dish, index) => {
        const { left, top, right, bottom } = dish.coordinates;
        return (
          <div
            key={index}
            onClick={() => onDishClick(dish)}
            className="absolute cursor-pointer bg-yellow-400/20 hover:bg-yellow-500/40 transition-all rounded"
            style={{
              left,
              top,
              width: right - left,
              height: bottom - top,
            }}
          />
        );
      })}
    </div>
  );
};

export default SadyaPlate;
