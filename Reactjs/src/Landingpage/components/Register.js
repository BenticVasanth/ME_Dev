import React from 'react'
import Navbar from '../Header'
import Footer from '../Footer'

function Register() {
    return (
        <div>
            <Navbar />

            <div className='container mt-3'>
                <div className='row  justify-content-center'>
                    <div className='col-md-offset-4 col-md-4'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h4 className='text-center'>Create An Account</h4>
                                <div className='form-group'>
                                    <input type='text' className='form-control mb-3' placeholder='Name' />
                                    <input type='number' className='form-control mb-3' placeholder='Mobile' />
                                    <input type='email' className='form-control mb-3' placeholder='Email Id' />
                                    <div className='mb-3'>
                                        <input type='checkbox' />   <span> Click for Email Notification</span>
                                    </div>


                                </div>
                                <button style={{ borderRadius: "20px", width: "100%", margin: "0px" }} className='btn btn-primary'>CREATE ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Register