import './NavBar.css'
import CartWidget from '../../CartWidget/CartWidget'

const NavBar = () => {

    return ( 

        <nav className = 'NavBar'>
            <div>
                <h3>Mango Sandia</h3>
            </div>
            <div>
            <ul className = 'barra'>
                    <li className ='menu'><a href="#"className = 'a'>Productos</a></li>
                    <li className ='menu'><a href="#"className = 'a'>Envios</a></li>
                    <li className ='menu'><a href="#"className = 'a'>Contacto</a></li>
            </ul>
            </div>
            <CartWidget /> 
        </nav>
    )
}
export default NavBar 
