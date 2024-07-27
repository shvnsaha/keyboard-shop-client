
import { useAppSelector } from "../redux/hook";


const Cart = () => {

    const cartItems = useAppSelector((state) => state.cart.items);
    console.log(cartItems);
    return (
        <div>
            
        </div>
    );
};

export default Cart;