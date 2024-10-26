import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [inputs, setInputs] = useState({
        full_name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        state: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/register`, inputs);
            // Handle successful registration (e.g., redirect or show a success message)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register