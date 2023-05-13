import { NavLink } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
  return (
    <header className='header-navbar'>

        <nav className='navbar-menu'>
            <ul className='ul-menu'>
                <li className='li-menu'>
                 <NavLink to={`/categoria/2`}>Salados</NavLink>
                 
                  </li>
                <li className='li-menu'>
                <NavLink to={`/categoria/4`}>Dulces</NavLink>
                </li>
               
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navbar;