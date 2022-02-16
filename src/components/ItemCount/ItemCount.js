import { useState 
        
} from "react" 


const ItemCount = ( {stock} ) => { 
    const [ count, setCount ]=useState(0); 
    
    const decrement = () => { 
        if ( count >0) {
            setCount ( count -1) 
        }
        
    }

    const increment = ( ) => {
        if ( count < stock ) {
            setCount ( count +1) 
        }
        
    }

    return ( 
        <div>
            <p> { count } </p>
        <button onClick={ decrement }> - </button> 
        <button onClick={ increment }> + </button>
        </div> 
    )

} 

export default ItemCount
