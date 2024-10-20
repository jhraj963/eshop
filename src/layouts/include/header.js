import React from 'react'
import { logout } from '../../Api/AllApi'
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Header() {
    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach(
            function (e) {
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    }

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
    
   return (
        <>
        
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <i className="fa fa-envelope"></i>
                        e-shopper@gmail.com
                    </div>
                    <div className="col-sm-6">
                        <i className="fa fa-phone-alt"></i>
                        +88 01572-378254
                    </div>
                </div>
            </div>
        </div>
 
        
        <div className='sticky-top'>
        <div className="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Dashboard") ? 'active' : ''}`}>
                            <Link to="/" className="sidebar-link nav-link">
                                <span className="menu-title">Home</span>
                            </Link>
                            </li>
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Products") ? 'active' : ''}`}>
                            <Link to="/Products" className="sidebar-link nav-link">
                                <span className="menu-title">Products</span>
                            </Link>
                            </li>
                               <li onClick={activeMenu} className={`nav-item ${isLinkActive("/AllProducts") ? 'active' : ''}`}>
                                   <Link to="/AllProducts" className="sidebar-link nav-link">
                                <span className="menu-title">All Products</span>
                            </Link>
                            </li>
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/ProductDetails") ? 'active' : ''}`}>
                            <Link to="/ProductDetails" className="sidebar-link nav-link">
                                <span className="menu-title">Product Details</span>
                            </Link>
                            </li>
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Cart") ? 'active' : ''}`}>
                            <Link to="/Cart" className="sidebar-link nav-link">
                                <span className="menu-title">Cart</span>
                            </Link>
                            </li>
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Checkout") ? 'active' : ''}`}>
                            <Link to="/Checkout" className="sidebar-link nav-link">
                                <span className="menu-title">Checkout</span>
                            </Link>
                            </li>
                            <li onClick={activeMenu} className={`nav-item ${isLinkActive("/MyAccount") ? 'active' : ''}`}>
                            <Link to="/MyAccount" className="sidebar-link nav-link">
                                <span className="menu-title">My Account</span>
                            </Link>
                            </li>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                <div className="dropdown-menu">
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Wishlist") ? 'active' : ''}`}>
                                    <Link to="/Wishlist" className="sidebar-link nav-link">
                                        <span className="menu-title dropdown-item">Wishlist</span>
                                    </Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/ContactUs") ? 'active' : ''}`}>
                                    <Link to="/ContactUs" className="sidebar-link nav-link">
                                        <span className="menu-title dropdown-item">Contact Us</span>
                                    </Link>
                                    </li>
                                    {/* <a href="login.html" className="dropdown-item">Login & Register</a> */}
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Content</a>
                                <div className="dropdown-menu">
                                    <a href="login.html" className="dropdown-item">Blog</a>
                                    <a href="contact.html" className="dropdown-item">FAQs</a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                <div className="dropdown-menu">
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Login") ? 'active' : ''}`}>
                                    <Link to="/Login" className="sidebar-link nav-link">
                                        <span className="menu-title dropdown-item">Login</span>
                                    </Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Register") ? 'active' : ''}`}>
                                    <Link to="/Register" className="sidebar-link nav-link">
                                        <span className="menu-title dropdown-item">Register</span>
                                    </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        </div>
        

        <div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="index.html">
                                   <img src="assets/img/logo.png" alt="Logo" width="90%"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="user">
                            <a href="wishlist.html" className="btn wishlist">
                                <i className="fa fa-heart"></i>
                                <span>(0)</span>
                            </a>
                            <a href="cart.html" className="btn cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
   )
}

export default Header