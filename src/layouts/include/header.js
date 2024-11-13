import React from 'react';
import { logout } from '../../Api/AllApi';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Header() {
    const { totalItems } = useCart();
    const [wishlist, setWishlist] = React.useState([]); // For wishlist items
    let userdata = localStorage.getItem("front_userdata");

    // Check if 'userdata' is a string before parsing, otherwise use it as is
    let parsedUserData = null;
    try {
        parsedUserData = userdata ? JSON.parse(userdata) : null;
    } catch (e) {
        // If it's already an object (or the string is malformed), handle the error gracefully
        console.error("Error parsing userdata:", e);
        parsedUserData = userdata;
    }

    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach((elem) => elem.classList.remove('active'));
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    };

    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
                return [...prevWishlist, item];
            }
            return prevWishlist;
        });
    };

    const removeFromWishlist = (itemId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId));
    };

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const handleLogout = async () => {
        await logout();
        window.location.href = "/"; // Optionally, redirect to homepage after logout
    };

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

            <div className="sticky-top">
                <div className="nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" className="navbar-brand">MENU</a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto">
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/")}`}>
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/AllProducts")}`}>
                                        <Link to="/AllProducts" className="nav-link">All Products</Link>
                                    </li>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</a>
                                        <div className="dropdown-menu">
                                            <li className={`nav-item ${isLinkActive("/Mens")}`}>
                                                <Link to="/Mens" className="dropdown-item">Mens</Link>
                                            </li>
                                            <li className={`nav-item ${isLinkActive("/Womens")}`}>
                                                <Link to="/Womens" className="dropdown-item">Womens</Link>
                                            </li>
                                            <li className={`nav-item ${isLinkActive("/Kids")}`}>
                                                <Link to="/Kids" className="dropdown-item">Kids</Link>
                                            </li>
                                        </div>
                                    </div>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/MyAccount")}`}>
                                        <Link to="/MyAccount" className="nav-link">My Account</Link>
                                    </li>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                        <div className="dropdown-menu">
                                            <li className={`nav-item ${isLinkActive("/Wishlist")}`}>
                                                <Link to="/Wishlist" className="dropdown-item">Wishlist ({totalItems})</Link>
                                            </li>
                                        </div>
                                    </div>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/ContactUs")}`}>
                                        <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                                    </li>
                                </div>
                                <div className="navbar-nav ml-auto">
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                        <div className="dropdown-menu">
                                            {parsedUserData ? (
                                                <>
                                                    <span className='dropdown-item'>Hi, {parsedUserData.full_name}</span>
                                                    <li className={`nav-item ${isLinkActive("/MyProfile")}`}>
                                                        <Link to="/MyProfile" className="dropdown-item">My Profile</Link>
                                                    </li>
                                                    <li className={`nav-item ${isLinkActive("/MyOrders")}`}>
                                                        <Link to="/MyOrders" className="dropdown-item">My Orders</Link>
                                                    </li>
                                                    <li className={`nav-item`}>
                                                        <button onClick={handleLogout} className="dropdown-item">Logout</button>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className={`nav-item ${isLinkActive("/Login")}`}>
                                                        <Link to="/Login" className="dropdown-item">Login</Link>
                                                    </li>
                                                    <li className={`nav-item ${isLinkActive("/Register")}`}>
                                                        <Link to="/Register" className="dropdown-item">Register</Link>
                                                    </li>
                                                </>
                                            )}
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
                                <Link to="/" className="">
                                    <img src="assets/img/logo.png" alt="Logo" width="90%" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <Link to="/Wishlist" className="btn cart">
                                    <i className="fa fa-heart"></i>
                                    <span>({totalItems})</span>
                                </Link>

                                <Link to="/Cart" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>({totalItems})</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
