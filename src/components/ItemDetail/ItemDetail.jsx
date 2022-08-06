import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    const [staticStock, setStaticStock] = useState(item.stock);

    // Put in env variables
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <>
            <div className="col-md-6">
                <div className="images p-3">
                    <div className="text-center p-4"> <img id="main-image" src={item.pictureUrl1} width="250" /> </div>
                    <div className="thumbnail text-center"> <img onclick="change_image(this)" src={item.pictureUrl2} width="70" /> <img onclick="change_image(this)" src={item.pictureUrl1} width="70" /> </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product p-4">
                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand"> {item.brand} </span>
                        <h5 className="text-uppercase">{item.title}</h5>
                        <div className="price d-flex flex-row align-items-center">
                            <div className="ml-2"> <small className="dis-price"> stock: {staticStock}</small> </div>
                        </div>
                    </div>
                    <p className="about">{item.description}</p>
                    <div className="cart mt-4 align-items-center"> <ItemCount stock={staticStock} initial={1} setStaticStock={setStaticStock} /> <i className="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                </div>
            </div>
        </>
    );

}

export default ItemDetail;