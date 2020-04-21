import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <h2>TCS Shopping</h2>
                    <br/><div className="Links">
                    <Link to="/Login">Login</Link>{" "} 
                    <Link to="/">Shop</Link>{" "}
                    <Link to="/cart">Favorite List</Link>{" "}
                     </div>
   </div></nav>
        
    )
}

export default Navbar;