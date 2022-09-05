import { useContext } from "react";
import { cartContext } from "../CartContext/CartContext";

const CartItem = ({ item }) => {

    const { title, quantity, price, id } = item;

    const { deleteItem } = useContext(cartContext);

    const deleteFromCart = () => {
        deleteItem(id);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="row">
            <div className="col-sm-6">{title}</div>
            <div className="col-sm-2">{quantity}</div>
            <div className="col-sm-2">{formatter.format(price * quantity)}</div>
            <div className="col-sm-2"> <button className="btn btn-danger" onClick={deleteFromCart}>Delete</button> </div>
        </div>
    )

}

export default CartItem;