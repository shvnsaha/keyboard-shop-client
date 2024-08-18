import { useState } from "react";
import Slider from "react-slider";
import { useGetProductsQuery } from "../redux/features/product/productApi/getProducts";
import CardSkeleton from "../components/shared/CardSkeleton";
import Card from "../components/shared/Card";
import { TProduct } from "../types";
import { Helmet } from "react-helmet-async";
import ScrollTop from "../hooks/useScrollToTop";

const Product = () => {
  ScrollTop()
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [values, setValues] = useState([0, 10000]);
  const [page, setPage] = useState(1);
  const limit = 6;

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
  };

 
  const handleClear = () =>{
    setPage(1)
    setValues([0,10000])
    setSortPrice("")
    setSearchTerm("")
  }

  const params = `searchTerm=${searchTerm}&page=${page}&limit=${limit}&sort=${sortPrice}&min=${values[0]}&max=${values[1]}`;

  
  const { data, isLoading, isSuccess } = useGetProductsQuery(params);

  const Pginetionclass =
    "join-item  btn text-lg font-bold hover:bg-green-600 hover:text-white font-Montserrat bg-green-200";

  return (
    <div className="px-4">
      <Helmet>
        <title>E-Shop | Buy Your Products</title>
      </Helmet>

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
            value={searchTerm}
            className="md:w-[30%] w-40 h-[50px] p-3 rounded-full border-2 border-[#DEDEDE]"
            onChange={(e) => setSearchTerm(e.target.value)}
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
            <button onClick={handleClear} className="btn btn-outline">Clear Filter</button>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex gap-2 rounded-sm items-center">
                <label className="text-lg font-semibold">Sort:</label>
                <select
                  className=" select max-w-xs focus:outline-none text-base font-medium border-green-700   select-bordered w-full "
                  onChange={(e) => setSortPrice(e.target.value)}
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
                max={10000}
                className="w-52 h-0.5 bg-gray-200 rounded-lg relative"
                thumbClassName="bg-blue-500 w-2 h-2 top-[-1px] rounded-full cursor-pointer absolute"
                trackClassName={`bg-red-300 h-[5px] rounded-md`}
                ariaLabel={["Min Price", "Max Price"]}
                ariaValuetext={(state) => `Value ${state.valueNow}`}
                pearling
                minDistance={10}
              />
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {Array.from({ length: 10 }, (_, index: number) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : data?.data?.result.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {data?.data?.result.map((product: TProduct) => (
            <Card key={product._id} product={product}></Card>
          ))}
        </div>
      ) : (
        <div className="col-span-3 h-96 flex my-20 justify-center items-center">
          <p>No Product Found</p>
        </div>
      )}

      {isSuccess && (
        <div className="paginetion flex mb-20">
          <div className="join border-green-300 border mx-auto ">
            <button
              onClick={() => setPage((old) => old - 1)}
              disabled={1 === page}
              className={`${Pginetionclass} disabled:bg-green-100`}
            >
              «
            </button>
            {[...Array(Math.ceil(data?.data?.total / limit)).keys()].map(
              (ele) => {
                return (
                  <button
                    onClick={() => setPage(ele + 1)}
                    key={ele + 1}
                    className={`${Pginetionclass} ${ele + 1 === page ? "bg-yellow-300" : ""
                      } `}
                  >
                    {ele + 1}
                  </button>
                );
              }
            )}

            <button
              onClick={() => setPage((old) => old + 1)}
              disabled={page === Math.ceil(data?.data?.total / limit)}
              className={`${Pginetionclass} disabled:bg-green-100`}
            >
              »
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Product;
