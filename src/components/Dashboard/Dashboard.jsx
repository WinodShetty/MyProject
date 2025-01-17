import avatar from "../../assets/images/dashboard/avatar.png";
import individual_success from "../../assets/images/dashboard/individual_success.svg";
import team_success from "../../assets/images/dashboard/team_success.svg";
import DayScore from "./DayScore";

const Dashboard = () => {
  return (
    <div className="bg-color4 py-8 sm:py-16 px-4 sm:px-10 h-[100%]">
      <div className=" w-full flex flex-col xl:flex-row items-center gap-10 2xl:gap-2">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full xl:w-1/2  2xl:w-2/5">
          <div className="">
            <img src={avatar} alt="avatar" />
          </div>
          <div className=" text-3xl">
            <h1>Hi Thomas Anree !!</h1>
            <p className="mt-4 text-color2">
              Welcome to <span className="font-bold">BTS</span>
              <span className="font-bold block">Fitness Dashboard</span>
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 2xl:w-3/5 flex flex-col md:flex-row gap-6 text-color4">
          <div className="bg-color5 flex gap-4 flex-row h-auto   flex-1 rounded-md p-2">
            <img
              src={individual_success}
              alt="personal"
              className=" w-1/3 object-cover rounded-md"
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-3xl lg:text-4xl font-semibold">
                Personal Score
              </p>
              <p className="text-4xl lg:text-5xl  font-bold">400</p>
            </div>
          </div>

          <div className="bg-color6 flex gap-4 flex-row h-auto  flex-1 rounded-md p-2">
            <img
              src={team_success}
              alt="team"
              className=" w-1/3 object-cover rounded-md"
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-3xl lg:text-4xl font-semibold">Team Score</p>
              <p className="text-4xl lg:text-5xl  font-bold">400</p>
            </div>
          </div>
        </div>
      </div>
      <DayScore />
    </div>
  );
};

export default Dashboard;
