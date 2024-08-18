import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/product/productApi/getProducts";
import Ratings from "../components/shared/Ratings";
import Swal from "sweetalert2";
import { useAppDispatch } from "../redux/hook";
import { addToCart, cartCount } from "../redux/features/cart/cartSlice";
import ScrollTop from "../hooks/useScrollToTop";
import Loader from "../components/shared/Loader";




const ProductDetails = () => {

    ScrollTop()
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { data, isLoading  } = useGetSingleProductQuery(id);

    

    if(isLoading)
        return <Loader></Loader>

    const {name,price,brand,available_quantity,rating,description} = data.data


    const handleAddToCart = async () => {
        if (!available_quantity) {
          Swal.fire({
            title: `${data.data.name} has been stocked out!`,
            text: "",
            icon: "error",
          });
          return;
        }
        
        try {
          dispatch(cartCount(data.data));
          dispatch(addToCart(data.data));
          Swal.fire({
            icon: "success",
            title: `${data.data.name} is added in cart`,
            text: "",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "You can't add product to cart more than it's available quantity!",
          });
        }
      };

    return (
        <div className="p-16">
            <div className="bg-white">
                <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                <div className='flex justify-center  
            
                    overflow-hidden 
                    rounded-xl'>
                                    <img
                                        src={data.data.image}
                                        alt="Product"
                                        className="max-h-96  rounded object-cover hover:scale-105 duration-500 transition-transform"
                                    />
                                </div>
                                <button type="button" className="absolute top-4 right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        fill="#ccc"
                                        className="mr-1 hover:fill-[#333]"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="lg:col-span-2 text-center lg:text-left space-y-3">
                            
                            <h1 className='text-xl md:text-3xl font-bold text-blue-500'>{name}</h1>
                            <span className='text-violet-600 font-semibold'>{brand}</span>
                            <div className='flex gap-2 text-xs justify-center lg:justify-start items-center'>
                                <Ratings rating={rating}></Ratings>
                                <span>({rating})</span>
                                {/* <p className='text-xs text-gray-400 cursor-pointer' onClick={() => showReview(_id)}>({ratingNumber} Customer Reviews)</p> */}
                            </div>
            
                            <p className='text-gray-700'>{description}</p>
                            <p>Available Quantity : {available_quantity}</p>
                            <p>Price: {price} BDT</p>
                            <div>
                                <button className='btn btn-outline text-white bg-blue-500' onClick={handleAddToCart}>Add To Cart</button>
                            </div>

                         
                        </div>
                    </div>

                 
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;