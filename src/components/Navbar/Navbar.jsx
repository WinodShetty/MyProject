/* eslint-disable react/prop-types */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/images/NavBar/male.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-16 flex  items-center justify-between md:justify-end pr-8 lg:pr-10">
      <button className="md:hidden pl-6 text-2xl " onClick={toggleSidebar}>
        {isOpen ? "" : <AiOutlineMenu />}
      </button>
      <div className="flex items-center gap-2">
        <div className="font-medium hidden sm:block">
          <h3 className="text-lg ">Thomas Anree</h3>
          <p className="text-sm">Ui Ux Designer</p>
        </div>
        <div>
          <img src={logo} alt="avatar" className="w-10 h-10 rounded-full" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 ">
            <button className="bg-color3 text-color4 p-2 rounded-xl w-full">
              LogOut
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
