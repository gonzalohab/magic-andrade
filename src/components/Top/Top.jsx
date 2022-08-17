import { useContext } from "react";

import { cartContext } from "../CartContext/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";


const Top = () => {

    const { cart } = useContext(cartContext);

    return (
        <section className="header-main border-bottom bg-white">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                    <div className="col-md-2">
                    </div>

                    <Search />

                    {
                        cart.length != 0 &&  <CartWidget />
                    }
                </div>
            </div>
        </section>
    )
}

export default Top;