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

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <div className="row">
            <div className="col-sm-6">{ title }</div>
            <div className="col-sm-2">{ quantity }</div>
            <div className="col-sm-2">{ formatter.format(price * quantity) }</div>
            <div className="col-sm-2"> <button className="btn btn-danger" onClick={deleteFromCart}>Delete</button> </div>
        </div>
    )

}

export default CartItem;