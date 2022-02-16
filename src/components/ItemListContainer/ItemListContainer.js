import { useState, useEffect} from "react"
import { getProducts } from "../asyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ( ) => {
    const [products, setProducts] = useState ([])
useEffect (()=>{

    getProducts().then((products)=>{
        setProducts(products)
    }) 
},[])

    return (
        <ItemList productos = { products } />
    )

}

export default ItemListContainer;