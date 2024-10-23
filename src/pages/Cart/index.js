import React, { useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Cart() {
    // State for cart items
    const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
    const [cartItems, setCartItems] = useState([]);



    // Add product to cart
    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };


    // Update quantity of a product
    const updateQuantity = (item, qty) => {
        let itemqty = item.quantity + qty;
        updateItemQuantity(item.id, itemqty);
    };

    // Calculate total price
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                                                    <p>Shipping Cost<span>৳50</span></p>
                                                    <h2>Grand Total<span>৳{cartTotal + 50}</span></h2>
                                                </div>
                                                <div className="cart-btn">

                                                    <Link to="/Checkout" className='btn btn-primary'>
                                                        Checkout
                                                    </Link>
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
