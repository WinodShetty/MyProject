/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";

const Hydration = ({ formData, setFormData }) => {
  const handleHydrationToggle = (checked) => {
    setFormData({ ...formData, hydrationGoals: checked });
  };

  const handleCaffeineToggle = (checked) => {
    setFormData({ ...formData, caffeineFree: checked });
  };

  return (
    <div>
      <h3 className="bg-color2 py-4 bg-opacity-30 px-2 rounded-lg my-4 text-xl sm:text-2xl font-bold">
        Hydration Goals
      </h3>
      <div className="flex items-center gap-4">
        <label htmlFor="hydration-goals">Hydration goal met</label>
        <Switch
          checked={formData.hydrationGoals}
          onCheckedChange={handleHydrationToggle}
          id="hydration-goals"
        />
      </div>
      <h3 className="bg-color8 py-4 bg-opacity-30 px-2 rounded-lg my-4 text-xl sm:text-2xl font-bold">
        Hydration Challenge (Reduce Caffeine)
      </h3>
      <div className="flex items-center gap-4">
        <label htmlFor="caffeine-free">Caffeine-free</label>
        <Switch
          checked={formData.caffeineFree}
          onCheckedChange={handleCaffeineToggle}
          id="caffeine-free"
        />
      </div>
    </div>
  );
};

export default Hydration;
