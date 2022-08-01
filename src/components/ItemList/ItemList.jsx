import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = ({category}) => {

    const [products, setProducts] = new useState([]);

    const getProducts = new Promise((resolve, reject) => {
    
        const prd = new Array();

        const categories = ['singles', 'mazos', 'accesorios'];
        
        for(let i = 1; i < 6; i++) {
            prd.push({
                id: i,
                title: `Product ${i}`,
                description: `Description of prouct ${i}`,
                price: 1000 * i,
                pictureUrl: 'http://wwww.google.cl',
                stock: Math.floor(Math.random() * 100),
                categoryId: categories[Math.floor(Math.random() * categories.length)],   
            });
        }

        setTimeout(resolve, 2000, prd);
        
      });
    
    
      useEffect(() => {
        getProducts.then( data => {
          const newData = data.filter(prd => prd.categoryId === (category === undefined ? prd.categoryId : category));
          setProducts(newData);
      });
      }, [category]);


      return(
        <div className="row">
            <h1>{category}</h1>
            {
                products.length === 0 
                && 'Loading' 
                ||  products.map( prd => <Item key={prd.id} product={prd} /> )
                    
            }
        </div>
      )

}

export default ItemList;