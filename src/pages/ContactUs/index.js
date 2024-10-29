import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout'
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function ContactUs() {
    const [inputs, setInputs] = useState({ id: '', name: '', email: '', subject: '', message: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/contact/${id}`).then(function (response) {
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
                apiurl = `/contact/edit/${inputs.id}`;
            } else {
                apiurl = `/contact/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <AdminLayout>
          <>

           {/* Contact Start */}
        <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <h2>Our Office</h2>
                            <h3><i className="fa fa-map-marker"></i>123 Office, Los Angeles, CA, USA</h3>
                            <h3><i className="fa fa-envelope"></i>office@example.com</h3>
                            <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <h2>Our Store</h2>
                            <h3><i className="fa fa-map-marker"></i>123 Store, Los Angeles, CA, USA</h3>
                            <h3><i className="fa fa-envelope"></i>store@example.com</h3>
                            <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                                <div className="contact-form">
                                    <h2>Contact Us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input defaultValue={inputs.name} name="name" onChange={handleChange} id="name"  type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input defaultValue={inputs.email} name="email" onChange={handleChange} id="email" type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                        <input defaultValue={inputs.subject} name="subject" onChange={handleChange} id="subject" email type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                        <textarea defaultValue={inputs.message} name="message" onChange={handleChange} id="message" className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button className="btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.24532098539802!3d34.05071312525937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2s123%20S%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1585634930544!5m2!1sen!2sbd" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact End */}
       
          
          
          </>  
        

            

            

            
        </AdminLayout>
    )
}

export default ContactUs