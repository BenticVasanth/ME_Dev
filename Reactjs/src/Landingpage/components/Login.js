import React from 'react'
import advertisement from "../../assets/catholicTamilWebsiteAdvertisement.png"
import mu from "../../assets/madrasUniversity.jpg";
import { styled } from 'styled-components';
import { Card } from 'react-bootstrap';

const ImgStyle = styled.div` 
	align-items: center;
	display: flex;
	height: 300px;
 
`;
const LoginBox = styled.div`
box-sizing: border-box;
margin-top:20px;

`;
function Login() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <ImgStyle>
                        <img className="img-fluid backShadow" src={advertisement} />
                    </ImgStyle>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="g-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <LoginBox>
                                    <Card style={{ padding: "25px 15px" }}>


                                        <form id="LoginFormId"  >

                                            <div className="form-group ">
                                                <input className="form-control  " data-val="true" data-val-regex="Invalid Email Address" data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" data-val-required="Email is required" id="Email" name="Email" placeholder="Email" type="text" value="" />
                                            </div>
                                            <div className="form-group mt-3 ">
                                                <input className="form-control  " data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" type="password" />
                                            </div>
                                            <div className="mt-3">
                                                <button type="submit" className="btn btn-primary col-md-12  ">SIGN IN</button>
                                            </div>
                                        </form>

                                    </Card>
                                </LoginBox>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-3"  >
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center ">
                                <a className="text-decoration-none  " href="/">Forgot Password</a>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center ">
                                <a className="text-decoration-none " href="/">Create New Account</a>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <ImgStyle>
                        <img className="img-fluid backShadow" src={mu} />
                    </ImgStyle>
                </div>
            </div>

        </div>
    )
}

export default Login