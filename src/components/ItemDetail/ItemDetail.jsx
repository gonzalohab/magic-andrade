import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    const [ staticStock, setStaticStock ] = useState(item.stock);

    // Put in env variables
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
      
    return(
        <div className="col-sm-3">
            <div className="card my-card" style={{ width: '18rem' }} >
                <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182056aa225%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182056aa225%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {item.title} </h5>
                        <span> { formatter.format(item.price) }  {/* $2,500.00 */} </span>
                        <h6 style={{color: "gray"}}> stock: {staticStock}</h6>
                        <p className="card-text">{item.description}</p>
                        <ItemCount stock={staticStock} initial={1} setStaticStock={setStaticStock}/>
                    </div>
            </div>

        </div>
    );

}

export default ItemDetail;