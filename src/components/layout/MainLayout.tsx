import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className='max-w-[2520px]  mx-auto   px-2'>
       
        <div className='mb-16'>
           <div  data-aos="fade-up">
               hello
           </div>
        </div>

        < div className='min-h-[calc(100vh-68px)]'>
            <Outlet></Outlet>
        </div>



    

    </div >
    );
};

export default MainLayout;