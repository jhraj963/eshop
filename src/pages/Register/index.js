import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { cusregister } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]); // Store selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object for multipart data
        const formData = new FormData();
        formData.append('photo', photo); // Append photo file
        Object.keys(inputs).forEach(key => {
            formData.append(key, inputs[key]); // Append other inputs
        });

        await cusregister(formData); // Send FormData to the API
        navigate('/Login');
    };

    return (
        <AuthLayout>
            <div className="text-center mb-5">
                <img src="./assets/img/logo.png" height="48" className="mb-4" alt="Logo" />
                <h3>Sign Up</h3>
                <p>Please fill the form to register.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="full_name">Full Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="full_name"
                                id="full_name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                className="form-control"
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Address"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                className="form-control"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="c_password">Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="c_password"
                                id="c_password"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="photo">Upload Photo</label>
                            <input
                                className="form-control"
                                type="file"
                                id="photo"
                                onChange={handlePhotoChange} // File input handler
                                required
                            />
                        </div>
                    </div>
                </div>
                <Link to="/Login">Have an account? Login</Link>
                <div className="clearfix">
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form>
        </AuthLayout>
    );
}

export default Register;
