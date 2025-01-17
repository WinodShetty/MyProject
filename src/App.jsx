import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-[100%] gap-4 h-[100vh] relative ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-[100%] font-nunito ">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="w-[100%] overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
