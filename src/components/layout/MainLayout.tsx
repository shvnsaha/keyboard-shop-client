import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import useWarn from "../../hooks/useWarn";
import { useAppSelector } from "../../redux/hook";

const MainLayout = () => {

  const cartCount = useAppSelector((state) => state.cart.count);
  const item = cartCount > 0;
  useWarn(item);
  return (
    <div className="max-w-[2520px]  mx-auto bg-gray-100">
      <div className="mb-16">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
