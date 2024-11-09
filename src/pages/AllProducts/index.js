import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import ReactSlider from 'react-slider'; // Import the slider

function AllProducts() {
    const [data, setData] = useState([]); // All products
    const [filteredData, setFilteredData] = useState([]); // Filtered products based on price
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [wishlist, setWishlist] = useState([]); // State for wishlist items
    const { addItem } = useCart();

    // State for price filtering using range slider
    const [priceRange, setPriceRange] = useState([0, 5000]); // Default range from 0 to 5000

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct/`);
            setData(response.data.data);
            setFilteredData(response.data.data); // Initialize with all products
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
        }
    };

    // Function to add item to wishlist
    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
                return [...prevWishlist, item];
            }
            return prevWishlist;
        });
    };

    // Filter products based on selected price range (auto filter on slider change)
    const handlePriceFilter = (newPriceRange) => {
        const [minPrice, maxPrice] = newPriceRange;
        // Filter data based on the new price range
        const filtered = data.filter((product) =>
            product.price >= minPrice && product.price <= maxPrice
        );
        setFilteredData(filtered); // Update filtered data
    };

    return (
        <AdminLayout>
            <div className="product-view">
                <div className="container-fluid">
                    <h2>All Products</h2>

                    {/* Flexbox to organize the product list and price filter */}
                    <div className="d-flex">
                        {/* Product List (Full Width) */}
                        <div className="col-12 col-md-9">
                            <div className="row">
                                {filteredData.length > 0 ? (
                                    filteredData.map((d) => (
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
                                                        <button type="button" className="btn btn-link" onClick={() => addItem(d)}>
                                                            <i className="fa fa-cart-plus"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-link" onClick={() => addToWishlist(d)}>
                                                            <i className="fa fa-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-action text-center">
                                                    <button type="button" className="btn btn-danger">
                                                        Available Product: {d.quantity} Pcs
                                                    </button>
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

                        {/* Price Filter Sidebar (on the right) */}
                        <div className="col-md-3">
                            <div className="price-filter">
                                <h5>Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}</h5>

                                <ReactSlider
                                    min={0}
                                    max={5000}
                                    step={100}
                                    value={priceRange}
                                    onChange={(newPriceRange) => {
                                        setPriceRange(newPriceRange); // Update price range state
                                        handlePriceFilter(newPriceRange); // Auto filter products on slider change
                                    }}
                                    renderTrack={(props, state) => <div {...props} className="slider-track" />}
                                    renderThumb={(props, state) => <div {...props} className="slider-thumb" />}
                                    ariaLabel={['Min price', 'Max price']}
                                    pearling
                                    minDistance={100} // Minimum distance between the thumbs
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AllProducts;
