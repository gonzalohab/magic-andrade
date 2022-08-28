import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const { cart, clearCart } = useContext(cartContext);

    const [ buyer, setBuyer ] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [ orderId, setOrderId ] = useState();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    let totalCart = cart.reduce((previousItem, currentItem) => previousItem + (currentItem.quantity * currentItem.price), 0);


    const marginTop10 = {
        marginTop: "10px"
    }

    const handlerForm = (event) => { 
        setBuyer(
            {...buyer, [event.target.name] : event.target.value }
        )
    }

    const sendOrder = (event) => {
        event.preventDefault();
        
        const order = {
            buyer,
            items: cart,
            date: new Date().toLocaleString(),
            total: totalCart
        }
        
        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then( ({id}) => setOrderId(id) )
                                       .catch( (err) => console.log(err) );

        clearCart();

    }

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

                    <div className="row" style={marginTop10}>
                        <h1> Check-Out! </h1>
                        
                        <form>
                            <div style={marginTop10}>
                                <input type="text" placeholder="Name, example: Gonzalo Andrade" name="name" onChange={handlerForm}/>
                            </div>

                            <div style={marginTop10}>
                                <input type="text" placeholder="Email, example: gonzalo.andrade@gmail.com" name="email" onChange={handlerForm} />
                            </div>

                            <div style={marginTop10}>
                                <input type="text" placeholder="Phone, example: +56996802109" name="phone" onChange={handlerForm} />
                            </div>

                            <button type="submit" className="btn btn-primary" style={marginTop10} onClick={sendOrder}> Check-out!!</button>

                        </form>

                    </div>
                </>

                ||

                <>
                    <div className="row">
                        {
                            orderId && <div className="col-sm-12"> Gracias por tu compra, tu id de order es <b>{orderId}</b> </div>
                        }

                        <div className="col-sm-12"> No hay items en el carrito <Link to='/'>Inicio</Link> </div>
                    </div>
                </>
            }

        </div>

    );

}

export default Cart;