import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useCart } from 'react-use-cart';
import { useNavigate, useParams } from 'react-router-dom';

function Checkout() {
    const customer_id = JSON.parse(localStorage.getItem('front_userdata'));
    const { items, cartTotal } = useCart();
    const [inputs, setInputs] = useState({
        customer_id: customer_id?.id,
        customer_name: '',
        email: '',
        mobile_no: '',
        address: '',
        country: '',
        city: '',
        state: '',
        zip_code: '',
        shipping_method: '',
        payment_method: 'Cash on Delivery',
        order_date: new Date().toISOString().split('T')[0]
    });
    const [discount, setDiscount] = useState(0);
    const shippingCost = 50;

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {

        // Retrieve discount from localStorage
        const storedDiscount = localStorage.getItem('discountPercentage');
        setDiscount(storedDiscount ? parseFloat(storedDiscount) : 0);

        // Fetch existing order data if an ID is provided
        if (id) {
            getOrderData();
        }
    }, [id]);

    const getOrderData = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/allorder/${id}`).then((response) => {
            setInputs(response.data.data);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = inputs.id ? `/allorder/edit/${inputs.id}` : `/allorder/create`;
            const response = await axios.post(`${process.env.REACT_APP_API_URL}${apiUrl}`, {
                ...inputs,
                payment_method: inputs.payment_method || 'Cash on Delivery',
                items,
                total_amount: grandTotal
            });

            // Navigate to the invoice page with the order ID
            navigate(`/Invoice/${response.data.data.id}`);
        } catch (error) {
            console.error("Error submitting order", error);
        }
    };

    // Calculate discount amount and grand total
    const discountAmount = (cartTotal * discount) / 100;
    const discountedTotal = cartTotal - discountAmount;
    const grandTotal = discountedTotal + shippingCost;

    return (
        <AdminLayout>
            <div className="checkout">
                <div className="container-fluid">
                    <form className="form form-vertical" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-7">
                                {/* Billing Address */}
                                <div className="billing-address">
                                    <h2>Billing Address</h2>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="customer_name"
                                            placeholder="Enter your full name"
                                            value={inputs.customer_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={inputs.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile_no"
                                            placeholder="Enter your mobile number"
                                            value={inputs.mobile_no}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter your address"
                                            value={inputs.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <select
                                            className="custom-select"
                                            name="country"
                                            value={inputs.country}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Country</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            {/* Add more countries if needed */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            placeholder="Enter your city"
                                            value={inputs.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="state"
                                            placeholder="Enter your state"
                                            value={inputs.state}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>ZIP Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="zip_code"
                                            placeholder="Enter your ZIP code"
                                            value={inputs.zip_code}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Payment Method</label>
                                        <select
                                            className="custom-select"
                                            name="payment_method"
                                            value={inputs.payment_method}
                                            onChange={handleChange}
                                        >
                                            <option value="Cash on Delivery">Cash on Delivery</option>
                                            <option value="Paypal">Paypal</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                {/* Order Summary */}
                                <div className="checkout-summary">
                                    <h1>Cart Total</h1>
                                    {items.map((item) => (
                                        <p key={item.id}>
                                            {item.productname}<span>৳{item.price * item.quantity}</span>
                                        </p>
                                    ))}
                                    <p className="sub-total">Sub Total<span>৳{cartTotal}</span></p>
                                    <p className="discount">Discount ({discount}%)<span>-৳{discountAmount.toFixed(2)}</span></p>
                                    <p className="ship-cost">Shipping Cost<span>৳{shippingCost}</span></p>
                                    <h2>Grand Total<span>৳{grandTotal.toFixed(2)}</span></h2>
                                </div>
                                <button type="submit" className="btn btn-primary">Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Checkout;
