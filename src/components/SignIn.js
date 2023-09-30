import React from 'react'
import "./signupcss.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            {/* user already exists */}
            <div className="parent">
                <div className="signup">
                    <div className="signup-box">
                        <div className="heading">
                            <h1>Sign In</h1>
                        </div>
                        <form method="POST" >
                            <div className="input-section">
                                <input type="email" placeholder='Enter your email' name='email' value="" />
                                <input type="password" placeholder='Enter your password' name='password' value="" />
                            </div>
                            <div className="btn">
                                <input type="submit" value="SignIn" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="orline">
                    <p>or</p>
                </div>
                <div className="otheroptions">
                    <Link to="/"><img src="./images/googleColoredIcon.png" alt="google" />Continue with Google</Link>
                    <Link to="/"><img src="./images/appleColoredIcon.png" alt="apple" />Continue with Apple</Link>
                    <Link to="/"><img src="./images/facebookColoredIcon.png" alt="facebook" />Continue with Facebook</Link>
                </div>
                <div className="orline">
                    <p>or</p>
                </div>
                <div className="otheroptions second-one">
                    <Link to="/"><img src="./images/qrColoredIcon.png" alt="qrcode" />
                        Log in with QR code</Link>
                </div>
                <div className="content">
                    <p>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.

                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div >
        </>
    )
}

export default SignIn