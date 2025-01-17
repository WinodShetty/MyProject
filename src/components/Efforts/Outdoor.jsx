/* eslint-disable react/prop-types */
import { Trash2 } from "lucide-react";

const Outdoor = ({ formData, setFormData }) => {
  const gameTypes = ["Badminton", "Swimming", "Football"];
  const handleAddGame = () => {
    setFormData((prevData) => ({
      ...prevData,
      outdoorGames: [...prevData.outdoorGames, { type: "", duration: 0 }],
    }));
  };

  const handleDeleteGame = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      outdoorGames: prevData.outdoorGames.filter((_, i) => i !== index),
    }));
  };

  const handleGameChange = (index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      outdoorGames: prevData.outdoorGames.map((game, i) =>
        i === index ? { ...game, [field]: value } : game
      ),
    }));
  };

  const selectedGames = new Set(formData.outdoorGames.map((game) => game.type));
  const allGameTypesSelected = gameTypes.every((type) =>
    selectedGames.has(type)
  );
  return (
    <div className="mt-5">
      <h3 className="bg-color2 py-4 bg-opacity-30 px-2 rounded-lg my-4 text-xl sm:text-2xl font-bold">
        Outdoor Games
      </h3>
      <div className="flex flex-col items-start gap-4">
        {formData.outdoorGames.map((game, index) => (
          <div
            key={index}
            className="flex  items-center gap-4 border-2 border-color3 rounded-md p-2 text-lg w-full sm:w-96"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <select
                className="p-2 bg-color4 outline-none cursor-pointer"
                value={game.type}
                onChange={(e) =>
                  handleGameChange(index, "type", e.target.value)
                }
              >
                <option value="" disabled hidden>
                  Select game
                </option>
                <option
                  value="Badminton"
                  disabled={
                    selectedGames.has("Badminton") && game.type !== "Badminton"
                  }
                >
                  Badminton
                </option>
                <option
                  value="Swimming"
                  disabled={
                    selectedGames.has("Swimming") && game.type !== "Swimming"
                  }
                >
                  Swimming
                </option>
                <option
                  value="Football"
                  disabled={
                    selectedGames.has("Football") && game.type !== "Football"
                  }
                >
                  Football
                </option>
              </select>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="0"
                  className="w-20 bg-color4 p-2 outline-none"
                  value={game.duration}
                  onChange={(e) =>
                    handleGameChange(index, "duration", e.target.value)
                  }
                />
                <div>mins</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleDeleteGame(index)}
              className="ml-auto text-red-500"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddGame}
          disabled={allGameTypesSelected}
          className={`mt-2 bg-color4 text-lg px-4 py-2 rounded-md ${
            allGameTypesSelected ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          + Add Game
        </button>
      </div>
    </div>
  );
};

export default Outdoor;
