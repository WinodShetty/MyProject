/* eslint-disable react/prop-types */
const StepChallenge = ({ formData, setFormData }) => {
  const handleStepChange = (stepCount) => {
    setFormData({ ...formData, stepCount });
  };
  return (
    <div>
      <h3 className=" bg-color2 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-xl sm:text-2xl font-bold">
        Daily Step Challenge
      </h3>
      <div className="flex  justify-between border-2 gap-3 border-color3 rounded-md sm:w-96 items-center p-2 text-lg">
        <label>Steps per day</label>
        <div className="relative">
          <input
            type="text"
            placeholder="0000"
            className="w-20 bg-color4 p-2 outline-none"
            value={formData.stepCount}
            onChange={(e) => handleStepChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StepChallenge;
