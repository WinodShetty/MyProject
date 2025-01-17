import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Effort from "./components/Efforts/Effort.jsx";
import Activity from "./components/Activity/Activity.jsx";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard.jsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    
    path: "",
    element: <App />,
    children: [
      
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "log-efforts",
        element: <Effort />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
