import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, inputs);
            
            // Save the token in local storage or a context for future use
            localStorage.setItem('token', response.data.token);
            alert("Login successful!");

            navigate('/dashboard'); // redirect to dashboard or homepage
        } catch (error) {
            console.error("Login failed", error);
            alert("Invalid credentials. Please try again.");
        }
    }

    return (
        <AuthLayout>
            <div className="text-center mb-5">
                <img src="./assets/img/logo.png" height="48" className='mb-4' alt="Logo" />
                <h3>Login</h3>
                <p>Please fill in your credentials to login.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={inputs.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Link to="/register">Don't have an account? Sign up</Link>
                <div className="clearfix">
                    <button type="submit" className="btn btn-primary float-right">Login</button>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Login;
