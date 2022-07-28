import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({title}) => {

    return(
        <div className="container">
            
            { title }

            <ItemList />

            {/* 
            <Item />
            */}

        </div>
    )


}

export default ItemListContainer;