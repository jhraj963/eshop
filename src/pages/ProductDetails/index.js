import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get product ID from URL
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');

    const { addItem } = useCart();

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct/${productId}`);
            setProduct(response.data.data);
        } catch (err) {
            setError('Failed to fetch product details.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <AdminLayout>Loading...</AdminLayout>;
    }

    if (error) {
        return <AdminLayout>{error}</AdminLayout>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select size!');
        } else {
            addItem({ ...product, size: selectedSize});
        }
    };

    return (
        <AdminLayout>
            <div className="product-detail">
                <div className="container-fluid">
                    <div className="row">
                        {product && (
                            <>
                                {/* Product Images Section */}
                                <div className="col-lg-6">
                                    <div className="product-images">
                                        {product.photo.split(',').map((src, i) => (
                                            <img
                                                key={i}
                                                src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`}
                                                alt={product.productname}
                                                width="100%"
                                                style={{ marginBottom: '10px' }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Product Details Section */}
                                <div className="col-lg-6">
                                    <h2>{product.productname}</h2>
                                    <p>{product.description}</p>
                                    <p><b>Price:</b> ৳{product.price || 99}</p>
                                    <p><b>Available:</b> {product.quantity} pcs</p>

                                    {/* Static Size Selection */}
                                    <div className="size-selection">
                                        <p><b>Size:</b></p>
                                        <select
                                            value={selectedSize}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            className="form-select"
                                        >
                                            <option value="">Select Size</option>
                                            {/* Static Sizes */}
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                    </div> <br/>

                                    {/* Add to Cart Button */}
                                    <button className="btn btn-primary" onClick={handleAddToCart}>
                                        Add to Cart
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default ProductDetails;
