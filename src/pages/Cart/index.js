import React, { useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Cart() {
    // State for cart items
    const [cartItems, setCartItems] = useState([]);

    // Sample product data for demonstration
    const products = [
        { id: 1, name: 'Product 1', price: 120, quantity: 1 },
        { id: 2, name: 'Product 2', price: 99, quantity: 1 },
        { id: 3, name: 'Product 3', price: 99, quantity: 1 }
    ];

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

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    // Update quantity of a product
    const updateQuantity = (productId, amount) => {
        setCartItems(
            cartItems.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            )
        );
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
                                                {cartItems.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="img">
                                                                <p>{item.name}</p>
                                                            </div>
                                                        </td>
                                                        <td>৳{item.price}</td>
                                                        <td>
                                                            <div className="qty">
                                                                <button className="btn-minus" onClick={() => updateQuantity(item.id, -1)}><i className="fa fa-minus"></i></button>
                                                                <input type="text" value={item.quantity} readOnly />
                                                                <button className="btn-plus" onClick={() => updateQuantity(item.id, 1)}><i className="fa fa-plus"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>৳{item.price * item.quantity}</td>
                                                        <td><button onClick={() => removeFromCart(item.id)}><i className="fa fa-trash"></i></button></td>
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
                                                    <p>Sub Total<span>৳{getTotalPrice()}</span></p>
                                                    <p>Shipping Cost<span>৳50</span></p>
                                                    <h2>Grand Total<span>৳{getTotalPrice() + 50}</span></h2>
                                                </div>
                                                <div className="cart-btn">
                                                    <button>Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sample products to add to cart */}
                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-md-4">
                                    <h2>{product.name}</h2>
                                    <p>৳{product.price}</p>
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Cart End */}
            </>
        </AdminLayout>
    );
}

export default Cart;
