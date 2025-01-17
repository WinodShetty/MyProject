/* eslint-disable react/prop-types */
const MeditationAndYoga = ({ formData, setFormData }) => {
  const handleChange = (value) => {
    setFormData({ ...formData, meditation: value });
  };
  return (
    <div>
      <h3 className=" bg-color8 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-2xl font-bold">
        Meditation and Yoga
      </h3>
      <div className="flex  justify-between border-2 gap-3 border-color3 rounded-md sm:w-96 items-center p-2 text-lg">
        <label htmlFor="meditation">Duration of session</label>
        <div className="flex items-center">
          <input
            type="text"
            id="meditation"
            placeholder="0"
            className="w-20 bg-color4 p-2 outline-none"
            value={formData.meditation}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div>mins</div>
        </div>
      </div>
    </div>
  );
};

export default MeditationAndYoga;
