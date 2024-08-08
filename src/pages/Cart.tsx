/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { TbCurrencyTaka } from "react-icons/tb";
import { useGetProductsQuery } from "../redux/features/product/productApi/getProducts";
import { TProduct } from "../types";
import {
  decreaseCart,
  deleteItem,
  increaseCart,
  TCartItem,
} from "../redux/features/cart/cartSlice";
import Loader from "../components/shared/Loader";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const idsString = cartItems.map((item) => item._id).join(",");

  const params = `id=${idsString}`;
  const { data, isLoading } = useGetProductsQuery(params);

  if (isLoading) {
    return <Loader />;
  }

  const handleDecrease = (item: TCartItem) => {
    if (item?.quantity > 1) {
      dispatch(decreaseCart(item));
    } else {
      toast.error("Product quantity should be greater than 0");
    }
  };

  // increase
  const handleIncrease = async (item: TCartItem) => {
    console.log(item);
    const product = data?.data.filter((it: TProduct) => it?._id === item?._id);
    const matchProduct: TProduct = product[0];
    if (item?.quantity < matchProduct?.available_quantity) {
      dispatch(increaseCart(item));
    } else {
      toast.error("Product is out of stock");
    }
  };

  // delete item:
  const handleDelete = (item: TCartItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(item));
        Swal.fire({
          title: "Deleted!",
          text: "Your cart product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productStockMap = data?.data?.result?.reduce(
    (map: any, product: TProduct) => {
      map[product._id] = product.available_quantity;
      return map;
    },
    {}
  );

  // // //Step 2: Check if all cart item quantities are less than the corresponding product stock
  const areAllQuantitiesValid = cartItems?.every((cartItem) => {
    const productStock = productStockMap[cartItem._id];
    return productStock !== undefined && cartItem.quantity <= productStock;
  });

  //console.log(areAllQuantitiesValid);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Helmet>
        <title>E-Shop | Cart</title>
      </Helmet>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr className="text-center">
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Room row data */}

                {cartItems?.map((item, index) => (
                  <tr key={item._id} className="text-center">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex justify-center items-center">
                        <div className="flex-shrink-0">
                          <div className="block relative">
                            <img
                              alt="profile"
                              src={item?.image}
                              className="mx-auto object-cover rounded h-10 w-15 "
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item?.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        className="btn btn-xs"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item?.quantity}
                        onChange={() => console.log(item?.quantity)}
                        className="w-10 mx-2 text-center overflow-hidden"
                      ></input>
                      <button
                        className="btn btn-xs"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"></p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => handleDelete(item)}
                        className="relative text-red cursor-pointer"
                      >
                        <MdDeleteOutline></MdDeleteOutline>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <div className="p-10 space-y-4 bg-purple-200 rounded-lg text-center">
          <p className="border-b-2 border-black">
            Total Product : {cartItems?.length || 0}{" "}
          </p>
          <p className="border-b-2 border-black">
            Total price: {totalPrice || 0} BDT
          </p>
          <button
            className="btn btn-outline"
            disabled={!areAllQuantitiesValid || !cartItems?.length}
          >
            <Link to={"/checkout"}>Proceed Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
