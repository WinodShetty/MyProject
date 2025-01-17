/* eslint-disable react/prop-types */
const Relaxation = ({ formData, setFormData }) => {
  const handleChange = (value) => {
    setFormData({ ...formData, mindfulnessOrRelaxation: value });
  };
  return (
    <div>
      <h3 className=" bg-color2 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-xl sm:text-2xl font-bold">
        Mindfulness or Relaxation
      </h3>
      <div className="flex  justify-between border-2 gap-3 border-color3 rounded-md sm:w-96 items-center p-2 text-lg">
        <label>Duration of session</label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="0"
            className="w-20 bg-color4 p-2 outline-none"
            value={formData.mindfulnessOrRelaxation}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div>mins</div>
        </div>
      </div>
    </div>
  );
};

export default Relaxation;
