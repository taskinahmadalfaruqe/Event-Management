import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUS from "../Pages/AboutUS/AboutUS";
import Purchased from "../Pages/Purchased/Purchased";

export const Routs = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('/cultural.json'),
        },
        {
            path: '/purchased',
            element: <Purchased></Purchased>
        },
        {
            path: '/about',
            element: <AboutUS></AboutUS>
        },
    ]
  },
]);

export default Routs;
