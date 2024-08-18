import { useState } from "react";
import { useAddOrderMutation } from "../redux/features/order/orderApi/addOrder";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(false)
  const [addOrder] = useAddOrderMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.client_name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const OrderData = {
      name, email, phone, address, cartItems
    };


    console.log(OrderData);
    try {
      setLoading(true);
      const res = await addOrder(OrderData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        dispatch(clearCart())
        navigate('/payment')
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pt-10 bg-gray-100">
      <div className="max-w-lg mx-auto rounded-lg bg-white p-5">
        <h1 className="text-center font-bold text-3xl mb-3">Checkout Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="client_name"
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="phone"
                id="phone"
                type="text"
                placeholder="Phone"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <textarea
                id="address"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="address"
                placeholder="Address"
                required
              ></textarea>
            </div>
          </div>
          <div>
            <div className="space-y-2 mt-2">
              <p className="border-red-400 border-b">Product rice: {totalPrice} Tk</p>
              <p className="border-red-400 border-b">Delivery Charge: 100 Tk</p>
              <p className="border-red-400 border-b">Total : {totalPrice + 100} Tk</p>
            </div>
            <div className="mt-2  items-center">
              <input className="mr-2" type="checkbox" onChange={() => setValue(!value)} />
              <label htmlFor="">Cash On Delivery</label>
            </div>
          </div>
          <button
            disabled={!cartItems.length || !value}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium  transition duration-200 rounded shadow-md btn btn-outline"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Place Order"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
