import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemList = ({category}) => {

    const [products, setProducts] = new useState([]);
        
      useEffect(() => {
        setProducts([]);

        const db = getFirestore();
        const itemsCollection = category === undefined ? collection(db, 'items') : query( collection(db, 'items'), where('categoryId', '==', category) );
        getDocs(itemsCollection).then( (snapshot) => {
                                    setProducts(snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() })))
                                })
                                .catch( err => console.log(err));
        console.log(products, category);                        

      }, [category]);


      return(
        <div className="row">
            <h1>{category}</h1>
            {
                products.length === 0 
                && <Loader/>
                ||  products.map( prd => <Item key={prd.id} id={prd.id} product={prd} /> )
                    
            }
        </div>
      )

}

export default ItemList;