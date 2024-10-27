import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Wishlist() {
    const { items, removeItem, updateItemQuantity, addItem, cartTotal } = useCart();

    // Update quantity of a product
    const updateQuantity = (item, qty) => {
        const newQuantity = item.quantity + qty;
        if (newQuantity > 0) {
            updateItemQuantity(item.id, newQuantity);
        }
    };

    return (
        <AdminLayout>
            <>
                {/* Cart Start */}
                <div className="cart-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-page-inner">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    {/* <th>Total</th> */}
                                                    <th>Add to Cart</th>
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
                                                                <button className="btn-minus" onClick={() => updateQuantity(item, -1)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                <input type="text" value={item.quantity} readOnly />
                                                                <button className="btn-plus" onClick={() => updateQuantity(item, 1)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        {/* <td>৳{item.price * item.quantity}</td> */}
                                                        <td>
                                                            <button onClick={() => addItem(item)}>
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => removeItem(item.id)}>
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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

export default Wishlist;
