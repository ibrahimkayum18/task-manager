import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Projects from "../Pages/DashboardPages/Projects";
// import CompletedProjects from "../Pages/DashboardPages/CompletedProjects";
import PrivateRouter from "../Provider/PrivetRouter";
import Update from "../Pages/Update/Update";
import WorkToDo from "../Pages/DashboardPages/WorkToDo";
import Boards from "../Pages/DashboardPages/Boards";
import Members from "../Pages/DashboardPages/Members";
import WorkspaceSettings from "../Pages/DashboardPages/WorkspaceSettings";
import Project from "../Pages/DashboardPages/Project";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-tasks",
        element: <MyTasks />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/projects",
        element: <Project />,
      },
      {
        path: "/dashboard/boards",
        element: <Boards />,
      },
      {
        path: "/dashboard/members",
        element: <Members />,
      },
      {
        path: "/dashboard/worspace-settings",
        element: <WorkspaceSettings />,
      },
      {
        path: "/dashboard/my-projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
