/* eslint-disable react/prop-types */
import { Switch } from "@/components/ui/switch";

const SleepImprovement = ({ formData, setFormData }) => {
  const handleSleepToggle = (checked) => {
    setFormData({ ...formData, sleepChallenge: checked });
  };

  return (
    <div>
      <h3 className="bg-color2 py-4 bg-opacity-30 px-2 rounded-lg my-4 text-xl sm:text-2xl font-bold">
        Sleep Improvement Challenge
      </h3>
      <div className="flex items-center gap-4 px-2">
        <label htmlFor="sleep">Sleep hours met</label>
        <Switch
          checked={formData.sleepChallenge}
          onCheckedChange={handleSleepToggle}
          id="sleep"
        />
      </div>
    </div>
  );
};

export default SleepImprovement;
