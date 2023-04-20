import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from '../widgets/Hamburger'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'
import Dollar from '../widgets/Dollar'


const Header = () => {
  const [menu,setMenu]=useState(false);
  const [sidebar,setSidebar]=useState(false);
  const location=useLocation();

  return (
    <header>
      <nav className='nav'>
        <NavLink to="/" className="brand-logo">
          <h2 className='logo-start-title'>Ship<span className='logo-end-title'>mate</span></h2>
        </NavLink>

        {location.pathname=="/"? <div className='nav-menu'>
          <ul className='items-center'>
            <li className='menu-item'>
              <NavLink to="*" className="login-btn py-[14px] px-[53px]">Login</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to="/login" className="learn-more-btn">Learn more</NavLink>
            </li>
          </ul>
        </div>
        :
        <div className='nav-menu'>
          <ul className='items-center'>
            <li className='menu-item'>
              <NavLink to="#" className="">
                <Dollar />
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to="#" className="track-shipment-btn py-[14px] px-[19px]">Track Shipment</NavLink>
            </li>
          </ul>
        </div>}
        <div className="mobile-menu">
          <Hamburger setSidebar={setSidebar}/>
          <Sidebar sidebar={sidebar} />
        </div>
      </nav>
    </header>
  )
}

export default Header