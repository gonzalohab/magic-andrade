import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({title}) => {

    const { categoryId } = useParams();

    return(
        <div className="container">
            
            <h1>{ title }</h1>

            <ItemList category={categoryId}/>

            {/* 
            <Item />
            */}

        </div>
    )


}

export default ItemListContainer;