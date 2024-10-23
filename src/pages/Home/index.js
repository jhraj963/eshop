import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

function Home() {
    const { addItem } = useCart();
    const [feature, setFeature] = useState([]);
    const [recent, setRecent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const resf = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct?featured=1`);
            setFeature(resf.data.data);

            const resr = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct?recent=4`);
            setRecent(resr.data.data);
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <AdminLayout>
            <>

                {/* Main Slider Start */}
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <nav className="navbar bg-light">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-home"></i>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i>Best Selling</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-plus-square"></i>New Arrivals</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-female"></i>Fashion & Beauty</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-child"></i>Kids & Babies Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-tshirt"></i>Men & Women Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-microchip"></i>Electronics & Accessories</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-6">
                                <div className="header-slider carousel slide" data-ride="carousel">

                                    <div className="header-slider-item">
                                        <img src="assets/img/slider-1.jpg" alt="Slider Image" />
                                        <div className="header-slider-caption">
                                            <p>Some text goes here that describes the image</p>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                        </div>
                                    </div>
                                    {/* <div className="header-slider-item">
                                        <img src="assets/img/slider-3.jpg" alt="Slider Image" />
                                <div className="header-slider-caption">
                                    <p>Some text goes here that describes the image</p>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                </div>
                            </div>
                            <div className="header-slider-item">
                                        <img src="assets/img/slider-1.jpg" alt="Slider Image" />
                                <div className="header-slider-caption">
                                    <p>Some text goes here that describes the image</p>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                </div>
                            </div> */}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="header-img">
                                    <div className="img-item">
                                        <img src="assets/img/category-1.jpg" />
                                        <a className="img-text" href="">
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                    <div className="img-item">
                                        <img src="assets/img/category-2.jpg" />
                                        <a className="img-text" href="">
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Slider End */}

                {/* Feature Start*/}
                <div className="feature">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fab fa-cc-mastercard"></i>
                                    <h2>Secure Payment</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-truck"></i>
                                    <h2>Worldwide Delivery</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-sync-alt"></i>
                                    <h2>90 Days Return</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-comments"></i>
                                    <h2>24/7 Support</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End*/}

                {/* Category Start*/}
                <div className="category">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="category-item ch-400">
                                    <img src="assets/img/category-3.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-250">
                                    <img src="assets/img/category-4.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="category-item ch-150">
                                    <img src="assets/img/category-5.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-150">
                                    <img src="assets/img/category-6.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="category-item ch-250">
                                    <img src="assets/img/category-7.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-400">
                                    <img src="assets/img/category-8.jpg" />
                                    <a className="category-name" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category End*/}

                {/* Call to Action Start */}
                <div className="call-to-action">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1>call us for any queries</h1>
                            </div>
                            <div className="col-md-6">
                                <a href="tel:0123456789">+012-345-6789</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action End */}

                {/* Featured Product Start */}
                <div className="featured-product product">
                    <div className="container-fluid">
                        <div className="section-header">
                            <h1>Featured Product</h1>
                        </div>
                        <div className="row align-items-center product-slider product-slider-4">
                            {feature.length > 0 ? (
                                feature.map((d) => (
                                    <div className="col-md-3" key={d.id}>
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="#">{d.productname}</a>
                                                <div className="ratting">
                                                    {[...Array(5)].map((_, index) => (
                                                        <i key={index} className="fa fa-star"></i>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    {d.photo.split(',').map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`}
                                                            alt="Product"
                                                            width="100%"
                                                            style={{ display: i === 0 ? 'block' : 'none' }}
                                                        />
                                                    ))}
                                                </a>

                                                <div className="product-action">
                                                    <button type='button' className="btn btn-link" onClick={() => { addItem(d) }}><i className="fa fa-cart-plus"></i></button>
                                                    <button type='button' className="btn btn-link"><i className="fa fa-heart"></i></button>
                                                    <button type='button' className="btn btn-link"><i className="fa fa-search"></i></button>
                                                    {/* <button onClick={() => deleteData(d.id)}><i className="fa fa-trash"></i></button> */}
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>৳</span>{d.price || 99}</h3>
                                                <a className="btn" href="#"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No products available</div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Featured Product End */}

                {/* Newsletter Start */}
                <div className="newsletter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Subscribe Our Newsletter</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="form">
                                    <input type="email" value="Your email here" />
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}

                {/* Recent Product Start */}
                <div className="recent-product product">
                    <div className="container-fluid">
                        <div className="section-header">
                            <h1>Recent Product</h1>
                        </div>
                        {/* <div className="row align-items-center product-slider product-slider-4">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="assets/img/product-6.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>৳</span>99</h3>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="assets/img/product-7.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>৳</span>99</h3>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="assets/img/product-8.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>৳</span>99</h3>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="assets/img/product-9.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>৳</span>99</h3>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="assets/img/product-10.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>৳</span>99</h3>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row align-items-center product-slider product-slider-4">
                            {recent.length > 0 ? (
                                recent.map((d) => (
                                    <div className="col-md-3" key={d.id}>
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="#">{d.productname}</a>
                                                <div className="ratting">
                                                    {[...Array(5)].map((_, index) => (
                                                        <i key={index} className="fa fa-star"></i>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    {d.photo.split(',').map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`}
                                                            alt="Product"
                                                            width="100%"
                                                            style={{ display: i === 0 ? 'block' : 'none' }}
                                                        />
                                                    ))}
                                                </a>

                                                <div className="product-action">
                                                    <button type='button' className="btn btn-link" onClick={() => { addItem(d) }}><i className="fa fa-cart-plus"></i></button>
                                                    <button type='button' className="btn btn-link"><i className="fa fa-heart"></i></button>
                                                    <button type='button' className="btn btn-link"><i className="fa fa-search"></i></button>
                                                    {/* <button onClick={() => deleteData(d.id)}><i className="fa fa-trash"></i></button> */}
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>৳</span>{d.price || 99}</h3>
                                                <a className="btn" href="#"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No products available</div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Recent Product End */}

                {/* Review Start */}
                <div className="review">
                    <div className="container-fluid">
                        <div className="row align-items-center review-slider normal-slider">
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="assets/img/review-1.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="assets/img/review-2.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="assets/img/review-3.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </AdminLayout>
    )
}

export default Home