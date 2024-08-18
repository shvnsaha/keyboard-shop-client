import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout ";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import PaymentSuccess from "../pages/PaymentSuccess";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
        element: <AboutUs></AboutUs>
       },
       {
        path:'/contact-us',
        element: <ContactUs/>
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
      },
       {
        path:'/checkout',
        element: <Checkout/>
      },
      {
        path: '/payment',
        element: <PaymentSuccess></PaymentSuccess>
      }
      ]
    },
  ]);

  export default router