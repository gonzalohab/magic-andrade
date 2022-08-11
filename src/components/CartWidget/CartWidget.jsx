import { useContext, useEffect } from "react";
import { cartContext } from "../CartContext/CartContext";

const CartWidget = () => {

    const { cart } = useContext(cartContext);

    // Put in env variables
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (

        <div className="col-md-2">
            <div className="d-flex d-none d-md-flex flex-row align-items-center">
                <span className="shop-bag">
                    <i className='bx bxs-shopping-bag'></i>
                    {/* <FontAwesomeIcon icon="fas fa-shopping-bag" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </span>
                
                <div className="d-flex flex-column ms-2">
                    <span className="qty"> { cart.reduce((partialSum, a) => partialSum + a.quantity, 0) } Product</span>
                    <span className="fw-bold"> { formatter.format(cart.reduce((partialSum, a) => partialSum + (a.price * a.quantity) , 0)) }</span>
                </div>
            </div>
        </div>
    )


}

export default CartWidget;