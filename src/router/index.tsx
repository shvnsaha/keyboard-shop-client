import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
       {
        path: '/',
        element:<Home></Home>
       },
       {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }
      ]
    },
  ]);

  export default router