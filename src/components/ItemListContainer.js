import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        //<div>{greeting}</div>
        <div className = "Contador">
            <ItemCount />
        </div>
    );
}

export default ItemListContainer;