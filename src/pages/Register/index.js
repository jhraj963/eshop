import React, { useEffect, useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Register() {

    // const [inputs, setInputs] = useState([]);
    // const navigate = useNavigate();


    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }));
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await register(inputs);
    //     navigate('/login')
    // }

    const [inputs, setInputs] = useState({ id: '', full_name: '', email: '', phone: '', password: '', c_password: '', address: '', state: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)

        try {
            let apiurl = '';
            if (inputs.id != '') {
                apiurl = `/customer/edit/${inputs.id}`;
            } else {
                apiurl = `/customer/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/login')
        }
        catch (e) {
            console.log(e);
        }
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
                            <label htmlFor="name">Full Name</label>
                            <input className="form-control" type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="c_password">Confirm Password</label>
                            <input className="form-control" type="c_password" name="c_password" placeholder="Confirm Password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input className="form-control" type="address" name="address" placeholder="address" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="c_password">State</label>
                            <input className="form-control" type="state" name="state" placeholder="state" onChange={handleChange} required />
                        </div>
                    </div>

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