import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HowItWorks from "../Components/HowItWorks";
import Industries from "../Components/Industries";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/works',
            element:<HowItWorks/>,
        },
        {
            path: '/industries',
            element:<Industries/>,
        },
        {
            path: '/about',
            element:<About/>,
        },
        {
            path: '/contact',
            element:<Contact/>,
        },
        
    ]
  },
]);