import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

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
    
    useEffect( () => {
        getItem
            .then( data => {
                setItems([...items, data]);
            })
            .catch(err => console.log(err));
        console.log(`UseEffect`);
    }, []);

    return(

        
        <div className="row">
            
            <h1>ItemDetailContainer</h1>

            {
                items.length === 0 
                && 'Loading' 
                ||  items.map( item => <ItemDetail key={item.id} item={item} /> )
                    
            }
        </div>

    )


}

export default ItemDetailContainer;