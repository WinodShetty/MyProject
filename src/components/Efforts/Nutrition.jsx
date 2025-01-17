/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";

const Nutrition = ({ formData, setFormData }) => {
  const handleToggle = (checked) => {
    setFormData({ ...formData, nutrition: checked });
  };

  return (
    <div>
      <h3 className=" bg-color2 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-xl sm:text-2xl font-bold">
        Nutrition Goals
      </h3>

      <div className="flex items-center gap-4 ">
        <label htmlFor="nutrition">Nutrition goal met</label>
        <Switch
          checked={formData.nutrition}
          onCheckedChange={handleToggle}
          id="nutrition"
        />
      </div>
    </div>
  );
};

export default Nutrition;
