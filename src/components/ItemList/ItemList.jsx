import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = () => {

    const [products, setProducts] = new useState([]);

    const getProducts = new Promise((resolve, reject) => {
    
        const prd = new Array();
        
        for(let i = 1; i < 6; i++) {
            prd.push({
                id: i,
                title: `Product ${i}`,
                desciption: `Description of prouct ${i}`,
                price: 1000 * i,
                pictureUrl: 'http://wwww.google.cl',
                stock: Math.floor(Math.random() * 100),   
            });
        }

        setTimeout(resolve, 2000, prd);
        
      });
    
    
      useEffect(() => {
        getProducts.then( data => setProducts(data) );
      }, [ ]);


      return(
        <div class="row">
            {
                products.length === 0 
                && 'Loading' 
                ||  products.map( prd => <Item key={prd.id} product={prd} /> )
                    
            }
        </div>
      )

}

export default ItemList;