import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StepChallenge from "./StepChallenge";
import WeeklyExercise from "./WeeklyExercise";
import Outdoor from "./Outdoor";
import Nutrition from "./Nutrition";
import Hydration from "./Hydration";
import SleepImprovement from "./SleepImprovement";
import { useState } from "react";
import FoodLog from "./FoodLog";
import BalancedMeals from "./BalancedMeals";
import UnhealthyIngredients from "./UnhealthyIngredients";
import Journaling from "./Journaling";
import MeditationAndYoga from "./MeditationAndYoga";
import Relaxation from "./Relaxation";
import MealVariety from "./MealVariety";
import { toast } from "react-toastify";

const Effort = () => {
  const initialFormData = {
    stepCount: "",
    weeklyExercise: "",
    outdoorGames: [],
    mindfulnessOrRelaxation: "",
    meditation: "",
    journaling: false,
    balancedMeals: "",
    dailyFoodLog: false,
    mealVariety: "",
    nutrition: false,
    unhealthyIngredients: false,
    hydrationGoals: false,
    caffeineFree: false,
    sleepChallenge: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = () => {
    const incompleteGames = formData.outdoorGames.some(
      (game) => !game.type || !game.duration
    );

    if (incompleteGames) {
      toast.error(
        "Please fill in both the game type and duration for all outdoor games."
      );
    } else {
      toast.success("success");
      console.log("Form submitted:", formData);
      // Reset form data to initial values
      setFormData(initialFormData);
    }
  };

  return (
    <div className="bg-color4 sm:p-4 min-h-screen max-h-auto">
      <div className="max-w-7xl mx-auto bg-color4 rounded-xl items-center">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-10 bg-color7 p-2 md:p-8"
        >
          <AccordionItem
            value="item-1"
            className="border-2 border-color3 rounded-lg text-2xl"
          >
            <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-color4">
              Active Lifestyle Challenge
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <StepChallenge formData={formData} setFormData={setFormData} />
              <WeeklyExercise formData={formData} setFormData={setFormData} />
              <Outdoor formData={formData} setFormData={setFormData} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-2 border-color3 rounded-lg text-2xl"
          >
            <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-color4">
              Holistic Wellness Challenge
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Relaxation formData={formData} setFormData={setFormData} />
              <MeditationAndYoga
                formData={formData}
                setFormData={setFormData}
              />
              <Journaling formData={formData} setFormData={setFormData} />
              <BalancedMeals formData={formData} setFormData={setFormData} />
              <FoodLog formData={formData} setFormData={setFormData} />
              <MealVariety formData={formData} setFormData={setFormData} />
              <Nutrition formData={formData} setFormData={setFormData} />
              <UnhealthyIngredients
                formData={formData}
                setFormData={setFormData}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-2 border-color3 rounded-lg text-2xl"
          >
            <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-color4">
              Optimal Health and Recovery Challenge
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Hydration formData={formData} setFormData={setFormData} />
              <SleepImprovement formData={formData} setFormData={setFormData} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col items-center w-full pt-4 pb-8 bg-color7">
          <button
            onClick={handleSubmit}
            className="py-2 px-4 bg-color2 rounded-lg text-xl text-color7"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Effort;
