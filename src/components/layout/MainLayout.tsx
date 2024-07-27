import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"
import { Provider } from "react-redux"
import { store } from "../../redux/store"

const MainLayout = () => {

  

  return (

    <Provider store={store}>
    <div className='max-w-[2520px]  mx-auto'>
   
    <div className='mb-16'>
        <Navbar></Navbar>
    </div>

    < div className='min-h-[calc(100vh-68px)]'>
        <Outlet></Outlet>
    </div>
    <Footer></Footer>

</div >
</Provider>
  )
}

export default MainLayout
