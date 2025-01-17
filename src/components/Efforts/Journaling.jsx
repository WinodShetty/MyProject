/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";

const Journaling = ({ formData, setFormData }) => {
  const handleToggle = (checked) => {
    setFormData({ ...formData, journaling: checked });
  };

  return (
    <div>
      <h3 className="bg-color2 py-4 bg-opacity-30 px-2 rounded-lg my-4 text-xl sm:text-2xl font-bold">
        Journaling/Tracking Progress
      </h3>
      <div className="flex items-center gap-4">
        <label htmlFor="journaling">Journaling completed</label>
        <Switch
          checked={formData.journaling}
          onCheckedChange={handleToggle}
          id="journaling"
        />
      </div>
    </div>
  );
};

export default Journaling;
