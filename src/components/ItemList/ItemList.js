import Item from "../Item/Item"

const ItemList = ( {productos} ) => {
    console.log (productos.imagen)
    return (
        <ul>
            {productos.map (producto => {

                return <Item key={producto.id} nombre = { producto.nombre } imagen = { producto.imagen } /> 
            })}

        </ul>
    )
}

export default ItemList; 