import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/my-tasks',
                element:<MyTasks />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    }
])

export default Router;