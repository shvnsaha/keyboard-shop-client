import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/product/productApi/getProducts";
import { TProduct } from "../../types";
import Card from "../shared/Card";
import CardSkeleton from "../shared/CardSkeleton";

const FeaturedProduct = () => {
  const params = `page=1&limit=6`;
  const { data, isLoading } = useGetProductsQuery(params);

  if (isLoading) {
    return (
      <div className="px-6 overflow-hidden">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {Array.from({ length: 6 }, (_, index: number) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 overflow-hidden">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {data?.data?.map((product: TProduct) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/product"} className="btn btn-outline">
          See all
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
