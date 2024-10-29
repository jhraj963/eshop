import React from 'react';
import { logout } from '../../Api/AllApi';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Header() {
    const { totalItems } = useCart();
    const [wishlist, setWishlist] = React.useState([]); // For wishlist items

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
        // Redirect or show a logout confirmation if needed
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
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Products")}`}>
                                        <Link to="/Products" className="nav-link">Products</Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/AllProducts")}`}>
                                        <Link to="/AllProducts" className="nav-link">All Products</Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Cart")}`}>
                                        <Link to="/Cart" className="nav-link">Cart</Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Checkout")}`}>
                                        <Link to="/Checkout" className="nav-link">Checkout</Link>
                                    </li>
                                    <li onClick={activeMenu} className={`nav-item ${isLinkActive("/MyAccount")}`}>
                                        <Link to="/MyAccount" className="nav-link">My Account</Link>
                                    </li>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                        <div className="dropdown-menu">
                                            <li className={`nav-item ${isLinkActive("/Wishlist")}`}>
                                                <Link to="/Wishlist" className="dropdown-item">Wishlist ({totalItems})</Link>
                                            </li>
                                            {/* <li className={`nav-item ${isLinkActive("/ContactUs")}`}>
                                                <Link to="/ContactUs" className="dropdown-item">Contact Us</Link>
                                            </li> */}
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
                                            <li className={`nav-item ${isLinkActive("/Login")}`}>
                                                <Link to="/Login" className="dropdown-item">Login</Link>
                                            </li>
                                            <li className={`nav-item ${isLinkActive("/Register")}`}>
                                                <Link to="/Register" className="dropdown-item">Register</Link>
                                            </li>
                                            <li className={`nav-item ${isLinkActive("/")}`}>
                                                <Link to="/" className="dropdown-item">My Profile</Link>
                                            </li>
                                            <li className={`nav-item ${isLinkActive("/")}`}>
                                                <Link to="/" className="dropdown-item">My Order</Link>
                                            </li>
                                            <li className={`nav-item`}>
                                                <button onClick={handleLogout} className="dropdown-item">Logout</button>
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
                                    <img src="assets/img/logo.png" alt="Logo" width="90%" />
                                </a>
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
