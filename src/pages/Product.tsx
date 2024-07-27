import { useState } from "react";
import Slider from "react-slider";
import { useGetProductsQuery } from "../redux/features/product/productApi/getProducts";

const Product = () => {
  const [searchTerm,setSearchTerm] = useState('') 
  const [sortPrice,setSortPrice] = useState('')
  const [values, setValues] = useState([0, 1000]);
  const defaultValues = [0, 1000];

  const handleChange = (newValues) => {
    setValues(newValues);
  };

 
  let page = 1;
  let limit = 10;
  
 
const params = `searchTerm=${searchTerm}&page=${page}&limit=${limit}&sort=${sortPrice}&min=${values[0]}&max=${values[1]}`
const { data, isLoading } = useGetProductsQuery(params);

if(isLoading){
    return <p>loading</p>
}

console.log(data);
  return (
    <div className="px-4">
      {/* banner */}
      <div
        className="banner h-52 bg-blend-overlay rounded-lg"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h2
          className=" text-2xl text-center ml-2 sm:ml-0 lg:text-5xl font-bold text-green-600 pt-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Find Your Desired Product
        </h2>
        <div
          className="flex  justify-center pt-8 items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <input
            id="search"
            type="text"
            placeholder="Search Here"
            className="md:w-[30%] w-40 h-[50px] p-3 rounded-full border-2 border-[#DEDEDE]"
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div
        className="bg-green-200 p-2 rounded-lg"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row justify-between gap-5 items-center">
          <div>
            <h2 className="font-semibold text-2xl">Filter By:</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex gap-2 rounded-sm items-center">
                <label className="text-lg font-semibold">Sort:</label>
                <select
                  className=" select max-w-xs focus:outline-none text-base font-medium border-green-700   select-bordered w-full "
                   onChange={(e)=>setSortPrice(e.target.value)}
                   value={sortPrice}
                >
                  <option value="">Choose One</option>
                  <option value="price">Low to High</option>
                  <option value="-price">High to Low</option>
                </select>
              </div>
            </div>

            <div>
              <div className=" flex justify-between">
                <p>min: {values[0]}</p>
                <p>max: {values[1]}</p>
              </div>
              <Slider
                value={values}
                onChange={handleChange}
                min={0}
                max={1000}
                className="w-52 h-0.5 bg-gray-200 rounded-lg relative"
                thumbClassName="bg-blue-500 w-2 h-2 top-[-1px] rounded-full cursor-pointer absolute"
                trackClassName={`bg-white ${
                  values[0] >= defaultValues[0] ? "bg-red-200" : "bg-white"
                }  h-[5px] rounded-md`}
                ariaLabel={["Min Price", "Max Price"]}
                ariaValuetext={(state) => `Value ${state.valueNow}`}
                pearling
                minDistance={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
