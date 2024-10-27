import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { cusregister } from '../../Api/AllApi';

function Register() {

 const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    // let signup = async(inputs) => {
    //     await register(inputs);
    //     navigate('/signin');
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await cusregister(inputs);
        navigate('/login')
    }

    return (
        <AuthLayout>
            <div className="text-center mb-5">
                <img src="./assets/img/logo.png" height="48" className='mb-4' />
                <h3>Sign Up</h3>
                <p>Please fill the form to register.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="full_name">Full Name</label>
                            <input className="form-control" type="text" name="full_name" id="full_name" placeholder="Full Name" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input className="form-control" type="address" name="address" id="address" placeholder="address" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" type="text" name="phone" id="phone" placeholder="Phone" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="c_password">Confirm Password</label>
                            <input className="form-control" type="password" name="c_password" id="c_password" placeholder="Confirm Password" onChange={handleChange} required />
                        </div>
                    </div>
                    
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="c_password">State</label>
                            <input className="form-control" type="state" name="state" placeholder="state" onChange={handleChange} required />
                        </div>
                    </div> */}

                </div>
                <Link to="/login">Have an account? Login</Link>
                <div className="clearfix">
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Register