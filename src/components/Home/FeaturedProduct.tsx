import { useGetProductsQuery } from "../../redux/features/product/productApi/getProducts";
import { TProduct } from "../../types";
import Card from "../shared/Card";
import CardSkeleton from "../shared/CardSkeleton";

const FeaturedProduct = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {[...Array(6)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      {data?.data?.map((product: TProduct) => (
        <Card key={product._id} product={product}></Card>
      ))}
    </div>
  );
};

export default FeaturedProduct;
