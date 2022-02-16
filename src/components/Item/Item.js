
const Item = ( { nombre, imagen }) => {
    console.log(imagen)
    return ( <li> <img src = { imagen }> </img> {nombre}</li>)
    
}

export default Item; 