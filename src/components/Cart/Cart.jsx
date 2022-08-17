import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const { cart } = useContext(cartContext);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    let totalCart = cart.reduce((previousItem, currentItem) => previousItem + (currentItem.quantity * currentItem.price), 0);

    return (
        <div className="container">

            Cart Component

            {
                cart.length != 0 &&

                <>
                    <div className="row">
                        <div className="col-sm-6">Producto</div>
                        <div className="col-sm-2">Cantidad</div>
                        <div className="col-sm-2">Precio</div>

                    </div>

                    {
                        cart.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })
                    }

                    <div className="row"><div className="col-sm-12">Total: {formatter.format(totalCart)} </div></div>
                </>

                ||

                <>
                     <div className="row">
                        <div className="col-sm-12"> No hay items en el carrito <Link to='/'>Inicio</Link> </div>
                    </div>  
                </>
            }

        </div>

    );

}

export default Cart;