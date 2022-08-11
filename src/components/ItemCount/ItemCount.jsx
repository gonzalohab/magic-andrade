import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";

const ItemCount = ({stock, initial, setStaticStock, item}) => {

    const [count, setCount] = useState(initial);

    const { addItem } = useContext(cartContext);

    const minusCount = () => {
        setCount(count > 0 ? count-1 : count);
    }

    const plusCount = () => {
        setCount(count < stock ? count+1 : count);
    }

    const addToCart = () => {
        if (count <= stock) {
            setStaticStock(stock-count);
            setCount(initial);
            addItem(item, count);
        } else {
            alert("upss no hay stock!!");
            setCount(0);
        }
    }

    return(
        <>
           <div> 
           <button className="btn" onClick={minusCount}>-</button>
           <span style={{padding:"5px"}}> {count} </span>
           <button className="btn" onClick={plusCount}>+</button>
           </div>
           
           <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button> 
           
           <Link to='/cart'><button className="btn btn-primary" style={{ marginLeft: '5px'}} >Go to Cart</button> </Link>
        </>
    )

}

export default ItemCount;