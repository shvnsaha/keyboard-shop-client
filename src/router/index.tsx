import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Product from "../pages/Product";


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
        path:'/product',
        element: <Product></Product>
       },
       {
        path:'/about-us',
        element: <p>about us</p>
       },
       {
        path:'/contact-us',
        element: <p>contact us</p>
       },
       {
        path: "/product/:id",
        element: <ProductDetails />,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
       {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }
      ]
    },
  ]);

  export default router