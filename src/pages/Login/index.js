import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Login() {
    return (
        <AdminLayout>
          <>

           <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Login</h1>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-md-8">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" placeholder="E-mail"/>
                                </div>
                                <div className="col-md-8">
                                    <label>Password</label>
                                    <input className="form-control" type="text" placeholder="Password"/>
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                        <label className="custom-control-label" for="newaccount">Keep me signed in</label>
                                    </div>
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

export default Login