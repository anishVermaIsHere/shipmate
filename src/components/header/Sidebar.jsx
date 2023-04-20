import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = ({sidebar}) => {
    return (
        <div className='mobile-sidebar' style={{display:sidebar?"block":"none"}}>
            <ul>
                <li className='nav-item'>
                    <NavLink to="/" className="px-3 py-4">Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/login" className="px-3 py-4">Login</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/learn-more" className="px-3 py-4">Learn more</NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default Sidebar