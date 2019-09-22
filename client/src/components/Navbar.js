import React from 'react';
import '../css/Navbar.css';
import {NavLink} from 'react-router-dom'
import Today from '../containers/Today';

const Navbar = () => {
    return(
    <nav className='navbar'>
                <ul>
                    <button><NavLink to="/"> Home</NavLink></button>
                    <button><NavLink to="/boxes"> Art Inventory</NavLink> </button>
                    <button><NavLink to="/box/new">Add New Item</NavLink> </button>
                    <button><NavLink to="/notes">Note List</NavLink> </button>
                    <button><NavLink to="/note/new">Add New Note</NavLink> </button>
                    <button><NavLink to="/info">Information / Resources</NavLink> </button>
                    <button><NavLink to="/villages">Russian Villages</NavLink></button>
                </ul>
                <section className='today'>
                    <Today/>
                </section>
            </nav>
    )
}
 export default Navbar;