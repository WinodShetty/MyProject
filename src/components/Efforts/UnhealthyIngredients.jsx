/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";

const UnhealthyIngredients = ({ formData, setFormData }) => {
  const handleToggle = (checked) => {
    setFormData({ ...formData, unhealthyIngredients: checked });
  };
  return (
    <div>
      <h3 className=" bg-color8 py-4 bg-opacity-30 px-2 rounded-lg  my-4 text-xl sm:text-2xl font-bold">
        Reduction in Unhealthy Ingredients
      </h3>
      <div className="flex items-center gap-4">
        <label htmlFor="unhealthy">Unhealthy ingredients reduced</label>
        <Switch
          checked={formData.unhealthyIngredients}
          onCheckedChange={handleToggle}
          id="unhealthy"
        />
      </div>
    </div>
  );
};

export default UnhealthyIngredients;
