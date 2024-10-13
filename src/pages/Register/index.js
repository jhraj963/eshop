import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Register() {
    return (
        <AdminLayout>
          <>

           <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Register</h1>    
                        <div className="register-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder="First Name"/>
                                </div>
                                <div className="col-md-6">
                                    <label>Last Name"</label>
                                    <input className="form-control" type="text" placeholder="Last Name"/>
                                </div>
                                <div className="col-md-6">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" placeholder="E-mail"/>
                                </div>
                                <div className="col-md-6">
                                    <label>Mobile No</label>
                                    <input className="form-control" type="text" placeholder="Mobile No"/>
                                </div>
                                <div className="col-md-6">
                                    <label>Password</label>
                                    <input className="form-control" type="text" placeholder="Password"/>
                                </div>
                                <div className="col-md-6">
                                    <label>Retype Password</label>
                                    <input className="form-control" type="text" placeholder="Password"/>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
       
          
          
          </>  
        

            

            

            
        </AdminLayout>
    )
}

export default Register