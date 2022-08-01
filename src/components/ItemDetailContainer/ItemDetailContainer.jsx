import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState();

    const getItem = new Promise((resolve, reject) => {

        const prd = {
            id: Math.floor(Math.random() * 100000),
            title: `Producto desafío Consumiendo API's`,
            description: `Descripción del producto de prueba para el desafío consumiento API's`,
            price: 12500,
            pictureUrl: 'http://wwww.google.cl',
            stock: Math.floor(Math.random() * 100),
        };

        setTimeout(resolve, 2000, prd);

    });

    useEffect(() => {
        getItem
            .then(data => {
                setItem(data);
            })
            .catch(err => console.log(err));
    }, [itemId]);

    return (

        <div className="container">

            <div className="row">

                <h1>ItemDetailContainer {itemId} </h1>

                {
                    item === undefined
                    && 'Loading' 
                    ||  <ItemDetail item={item}/>
                }

               
            </div>

        </div>

    )


}

export default ItemDetailContainer;