/* eslint-disable react/prop-types */
import logo from "@/assets/logo/nav_logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const routes = [
    {
      path: "/",
      icon: <RxDashboard className="text-4xl" />,
      label: "Dashboard",
    },
    {
      path: "/activity",
      icon: <BsGraphUpArrow className="text-4xl" />,
      label: "Activity",
    },
    {
      path: "/log-efforts",
      icon: <IoMdTime className="text-4xl" />,
      label: "Log Efforts",
    },
    {
      path: "/leaderboard",
      icon: <MdOutlineLeaderboard className="text-4xl" />,
      label: "Leaderboard",
    },
  ];

  return (
    <div
      className={`absolute md:relative top-0 left-0 z-40 h-screen transition-transform duration-700 ease-linear ${
        isOpen ? "block" : "hidden"
      } w-24 md:w-28 md:block bg-white p-4  h-full `}
    >
      <div className="flex flex-col gap-8 items-center w-full ">
        <button className="md:hidden text-2xl  pr-2" onClick={toggleSidebar}>
          {isOpen ? <AiOutlineClose /> : ""}
        </button>
        <img src={logo} alt="logo" className="w-full" />
        <div>
          <ul className="flex flex-col gap-6 text-color1 ">
            {routes.map((route) => (
              <Link to={route.path} key={route.label} onClick={toggleSidebar}>
                <li
                  className={`flex flex-col items-center ${
                    location.pathname === route.path ? "text-color2" : ""
                  }`}
                >
                  <span className=" text-xl sm:text-3xl">{route.icon}</span>
                  <span>{route.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
