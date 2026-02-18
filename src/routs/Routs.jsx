import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HowItWorks from "../Components/HowItWorks";
import ScrollToTop from "../ScrollToTop";
import AiAgent from "../Components/Solutions.jsx/AiAgent";
import Automation from "../Components/Solutions.jsx/Automation";
import Workflow from "../Components/Solutions.jsx/Workflow";
import Mortgage from "../Components/Industries/Mortgage";
import Finance from "../Components/Industries/Finance";
import RealEstate from "../Components/Industries/RealEstate";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import CalendlyPage from "../Pages/CalendlyPage";
import SocialMediaManager from "../Components/SocialMediaManager";
import Insurance from "../Components/Industries/Insurance";
import Education from "../Components/Industries/Education";
import Healthcare from "../Components/Industries/Healthcare";
import SaaS from "../Components/Industries/SaaS";
import RecruiTment from "../Components/Industries/Recruitment";



export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <ScrollToTop/>
      <MainLayout></MainLayout>
      </>
    ),
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
            path: '/Solutions/ai-agent',
            element:<AiAgent/>,
        },
        {
            path: '/Solutions/sales-automation',
            element:<Automation/>,
        },
        {
            path: '/Solutions/workflow',
            element:<Workflow/>,
        },
        {
            path: '/media-manager',
            element:<SocialMediaManager/>,
        },
        {
            path: '/industries/mortgage',
            element:<Mortgage/>,
        },
        {
            path: '/industries/finance',
            element:<Finance/>,
        },
        {
            path: '/industries/real-Estate',
            element:<RealEstate/>,
        },
        {
            path: '/industries/insurance',
            element:<Insurance/>,
        },
        {
            path: '/industries/education',
            element:<Education/>,
        },
        {
            path: '/industries/healthcare',
            element:<Healthcare/>,
        },
        {
            path: '/industries/saas',
            element:<SaaS/>,
        },
        {
            path: '/industries/recruitment',
            element:<RecruiTment/>,
        },
        {
            path: '/about',
            element:<About/>,
        },
        {
            path: '/contact',
            element:<Contact/>,
        },
        {
            path: '/booking',
            element:<CalendlyPage/>,
        },
        {
            path: '/privacy-policy',
            element: <PrivacyPolicy/>,
        },
        
    ]
  },
]);