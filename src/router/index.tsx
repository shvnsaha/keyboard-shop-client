import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";


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
        path: "/product/:id",
        element: <ProductDetails />,
      },
       {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }
      ]
    },
  ]);

  export default router