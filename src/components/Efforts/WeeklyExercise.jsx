/* eslint-disable react/prop-types */
const WeeklyExercise = ({ formData, setFormData }) => {
  const handleWeeklyExerciseChange = (weeklyExercise) => {
    setFormData({ ...formData, weeklyExercise });
  };
  return (
    <div>
      <h3 className="   my-4 text-xl sm:text-2xl font-bold bg-color8  bg-opacity-30 py-4 px-1 rounded-md">
        Weekly Exercise Routine
      </h3>
      <div>
        <div className="flex  justify-between border-2 gap-3 border-color3 rounded-md sm:w-96 items-center p-2 text-lg">
          <label>Duration of session</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="0"
              value={formData.weeklyExercise}
              className="w-20 bg-color4 p-2 outline-none"
              onChange={(e) => handleWeeklyExerciseChange(e.target.value)}
            />
            <div>mins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyExercise;
