import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState();

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, 'items', itemId);
        getDoc(itemRef).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
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
                    || <ItemDetail item={item} />
                }


            </div>

        </div>

    )


}

export default ItemDetailContainer;