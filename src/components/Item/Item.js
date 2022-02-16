
const Item = ( { nombre, imagen }) => {
    console.log(imagen)
    return  ( <li> <img src =  {imagen} alt = "productos" /></li>)
    
}

export default Item; 