import { TbCurrencyTaka } from "react-icons/tb";
import Ratings from "./Ratings";
import { TProduct } from "../../types";



const Card = ({product}:{product:TProduct}) => {
   
    console.log(product);

    


    
    return (


        <div className='col-span-1  cursor-pointer group border-2 bg-base-200 hover:shadow-xl rounded-xl p-2'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
                aspect-square 
                w-full 
                relative 
                overflow-hidden 
                rounded-xl
              '
                >
                    <img
                        className='
                  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
                '
                        src={product.image}
                        alt='Room'
                    />
                    <div
                        className='
                absolute
                top-3
                right-3
              '
                    ></div>
                </div>
                <div className='font-semibold text-lg'>{product.name}</div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-xs text-violet-900'>{product.brand}</div>
                    <div className='font-semibold text-xs text-violet-900'>Brand Name</div>
                </div>

                <div className='flex items-center text-xs text-gray-700 justify-between'>
                    <div className='flex items-center text-xs text-gray-700 gap-2'>
                    <Ratings rating={product.rating}></Ratings>
                    
                       
                    </div>
                   

                </div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold flex items-center text-orange-800'><TbCurrencyTaka size={20}></TbCurrencyTaka> 20</div>
            </div>
        </div>

        </div>




    );
};

export default Card

