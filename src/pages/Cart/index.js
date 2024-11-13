import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from 'react-use-cart';
import axios from '../../components/axios';

function Cart() {
    const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [availableDiscounts, setAvailableDiscounts] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        // Fetch available discounts when component loads
        fetchDiscounts();
    }, []);

    const fetchDiscounts = async () => {
        try {
            // Fetch discounts from backend API
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/discount/`);
            setAvailableDiscounts(response.data.data);
        } catch (error) {
            console.error("Error fetching discounts", error);
        }
    };

    const applyDiscount = () => {
        const discountData = availableDiscounts.find(d => d.coupon === couponCode);
        if (discountData) {
            setDiscount(discountData.discount);
            // Store discount and coupon code in localStorage
            localStorage.setItem('discountPercentage', discountData.discount);
            localStorage.setItem('couponCode', couponCode);
            alert("Discount applied successfully!");
        } else {
            alert("Invalid coupon code.");
        }
    };

    // Calculate discounted total
    const discountedTotal = cartTotal - (cartTotal * discount / 100);
    const finalTotal = discountedTotal + 50; // Adding shipping cost

    // Update quantity of a product
    const updateQuantity = (item, qty) => {
        let itemqty = item.quantity + qty;
        updateItemQuantity(item.id, itemqty);
    };

    // Check if user is logged in
    const isLoggedIn = !!localStorage.getItem('front_access_token'); // Example of checking for an auth token

    // Redirect to login page if not logged in when clicking checkout
    const handleCheckoutClick = () => {
        if (!isLoggedIn) {
            navigate('/login'); // Redirect to login page
        } else {
            navigate('/checkout'); // Redirect to checkout page if logged in
        }
    };

    return (
        <AdminLayout>
            <>
                {/* Cart Start */}
                <div className="cart-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cart-page-inner">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody className="align-middle">
                                                {items.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="img">
                                                                <p>{item.productname}</p>
                                                            </div>
                                                        </td>
                                                        <td>৳{item.price}</td>
                                                        <td>
                                                            <div className="qty">
                                                                <button className="btn-minus" onClick={() => updateQuantity(item, -1)}><i className="fa fa-minus"></i></button>
                                                                <input type="text" value={item.quantity} readOnly />
                                                                <button className="btn-plus" onClick={() => updateQuantity(item, 1)}><i className="fa fa-plus"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>৳{item.price * item.quantity}</td>
                                                        <td><button onClick={() => removeItem(item.id)}><i className="fa fa-trash"></i></button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart-page-inner">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="cart-summary">
                                                <div className="cart-content">
                                                    <h1>Cart Summary</h1>
                                                    <p>Sub Total<span>৳{cartTotal}</span></p>
                                                    {/* Display Discount if applied */}
                                                    <p>Discount<span>{discount}%</span></p>
                                                    <p>Shipping Cost<span>৳50</span></p>
                                                    <h2>Grand Total<span>৳{finalTotal}</span></h2>
                                                </div>

                                                {/* Coupon Code Input Section */}
                                                <div className="cart-discount">
                                                    <input
                                                        type="text"
                                                        value={couponCode}
                                                        onChange={(e) => setCouponCode(e.target.value)}
                                                        placeholder="Enter coupon code"
                                                    />
                                                    <button className="btn btn-primary" onClick={applyDiscount}>Apply Coupon</button>
                                                </div><br />

                                                <div className="cart-btn">
                                                    <button className='btn btn-primary' onClick={handleCheckoutClick}>
                                                        Checkout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Cart End */}
            </>
        </AdminLayout>
    );
}

export default Cart;
