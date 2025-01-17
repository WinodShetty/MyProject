/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";
const FoodLog = ({ formData, setFormData }) => {
  const handleToggle = (checked) => {
    setFormData({ ...formData, dailyFoodLog: checked });
  };
  return (
    <div>
      <h3 className=" bg-color2 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-xl sm:text-2xl font-bold">
        Daily Food Log
      </h3>
      <div className="flex items-center gap-4 ">
        <label htmlFor="foodlog">Log meals</label>
        <Switch
          checked={formData.dailyFoodLog}
          onCheckedChange={handleToggle}
          id="foodlog"
        />
      </div>
    </div>
  );
};

export default FoodLog;
