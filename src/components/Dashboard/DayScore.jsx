import { FaRunning } from "react-icons/fa";

const DayScore = () => {
  const data = [
    { label: "running", time: "20 mins", points: "15" },
    { label: "running", time: "20 mins", points: "20" },
    { label: "running", time: "20 mins", points: "100" },
  ];
  const teamData = [
    {
      name: "Cody Fisher",
      points: "215",
    },
    {
      name: "Theresa Webb",
      points: "215",
    },
    {
      name: "Wade Warren",
      points: "215",
    },
    {
      name: "Robert Fox",
      points: "215",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-8 pb-16">
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-color7 p-6 rounded-xl">
          <h4 className="text-2xl mb-2">Today</h4>
          <div className="w-full h-[1px] bg-color3"></div>
          <div className="flex flex-col gap-8 mt-4">
            {data.map((val, ind) => (
              <div key={ind} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500 rounded-full p-2 text-2xl">
                    <FaRunning />
                  </div>
                  <div>
                    <h4 className="text-xl">{val.label}</h4>
                    <p className="text-color1">{val.time}</p>
                  </div>
                </div>
                <div>+{val.points}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-color7 p-6 rounded-lg">
          <h4 className="text-2xl mb-2">Sunday, 01 Sept 2024</h4>
          <div className="w-full h-[1px] bg-color3"></div>
          <div className="flex flex-col gap-8 mt-4">
            {data.map((val, ind) => (
              <div key={ind} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500 rounded-full p-2 text-2xl">
                    <FaRunning />
                  </div>
                  <div>
                    <h4 className="text-xl">{val.label}</h4>
                    <p className="text-color1">{val.time}</p>
                  </div>
                </div>
                <div>+{val.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-color3 text-color7 p-8 rounded-md">
        <h4 className="text-xl mb-2">Team view</h4>
        <div className="w-full h-[1px] bg-color7"></div>
        <div className="flex flex-col gap-8 mt-4">
          {teamData.map((val, ind) => (
            <div
              key={ind}
              className="flex flex-col sm:flex-row sm:justify-between  gap-4 sm:items-center"
            >
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 rounded-full p-2 text-2xl">
                  <FaRunning />
                </div>
                <div>
                  <h4 className="text-xl">{val.name}</h4>
                </div>
              </div>
              <div className="flex gap-2 text-2xl">
                <h2>{val.points}</h2>
                <p>Points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayScore;
