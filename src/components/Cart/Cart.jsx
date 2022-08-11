import { useContext } from "react";
import { cartContext } from "../CartContext/CartContext";

const Cart = () => {

    const { cart } = useContext(cartContext);

    return(
        <div>
            Cart Component
            {
                cart.forEach( (item) => {
                    return item.quantity;
                })
            }
        </div>

    );

}

export default Cart;