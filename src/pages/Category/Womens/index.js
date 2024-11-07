import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

function Womens() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const { addItem } = useCart();

    
    const categoryToShow = "2"; 

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct/`);
            // Filter the data to only include products from the desired category
            const filteredData = response.data.data.filter(
                (product) => product.category_id === categoryToShow
            );
            setData(filteredData);
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
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

    return (
        <AdminLayout>
            <div className="product-view">
                <div className="container-fluid">
                    {/* <h2>{categoryToShow} Products</h2> */}
                    <h2>Womens Collection</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {data.length > 0 ? (
                                    data.map((d) => (
                                        <div className="col-md-3" key={d.id}>
                                            <div className="product-item">
                                                <div className="product-title">
                                                    <Link to={`/product-detail/${d.id}`}>{d.productname}</Link>
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
                                                        <button
                                                            type="button"
                                                            className="btn btn-link"
                                                            onClick={() => addItem(d)}
                                                        >
                                                            <i className="fa fa-cart-plus"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-link"
                                                            onClick={() => addToWishlist(d)}
                                                        >
                                                            <i className="fa fa-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-action text-center">
                                                    <button type="button" className="btn btn-danger">Available Product: {d.quantity} Pcs
                                                    </button>
                                                </div>
                                                <div className="product-price">
                                                    <h3>
                                                        <span>৳</span>
                                                        {d.price || 99}
                                                    </h3>
                                                    <a className="btn" href="#">
                                                        <i className="fa fa-shopping-cart"></i> Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No products available</div>
                                )}
                            </div>
                        </div>
                        {/* Sidebar, categories, brands, and other components */}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Womens;