import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = ({ showLanguages }) => {
    const hidelang = () => {
        document.querySelector('.showLanguages').classList.remove('showLang');
    }
    const mobileHide = () => {
        document.querySelector('.mobile-show-horizontal').classList.toggle('mobilehide');
    }
    return (
        <>
            <div className="mobile-view-navbar">
                <div className="mobile-view-nav-component">
                    <ul>
                        <li className='company m' ><NavLink to="/" >Company</NavLink><i className="fa-solid fa-chevron-down" onClick={mobileHide}></i>
                            <div className="mobile-show-horizontal">
                                <h3>About us</h3>
                                <h3>Our offerings</h3>
                                <h3>How Uber works</h3>
                                <h3>Global citizenship</h3>
                                <h3>Newsroom</h3>
                                <h3>Investor relations</h3>
                                <h3>Blog</h3>
                                <h3>Careers</h3>
                            </div>
                        </li>
                        <li className='m'><NavLink to="/about">Safety</NavLink></li>
                        <li className='m'><NavLink to="/contact">Help</NavLink></li>
                        <li className='products'><NavLink to="/" ><span>:::</span>Products</NavLink></li>
                        <li id='languages'><i className="gg-globe-alt"></i><NavLink to="/" onClick={showLanguages} >EN</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="show-companies">
                <div className="show-horizontal">
                    <h3>About us</h3>
                    <h3>Our offerings</h3>
                    <h3>How Uber works</h3>
                    <h3>Global citizenship</h3>
                    <h3>Newsroom</h3>
                    <h3>Investor relations</h3>
                    <h3>Blog</h3>
                    <h3>Careers</h3>
                </div>
            </div>
            <div className="slideshows">
                <div className="showLanguages" id='showLanguage'>
                    <div className="langNames">
                        <h1>Select your preferred language</h1>
                        <p onClick={hidelang}>X</p>
                    </div>
                    <div className="lang">
                        <h2>বাংলা</h2>
                        <h2 className='act'>English</h2>
                        <h2>हिन्दी</h2>
                        <h2>ಕನ್ನಡ</h2>
                        <h2>मराठी</h2>
                        <h2>தமிழ்</h2>
                        <h2>తెలుగు</h2>
                        <h2>اردو</h2>
                    </div>
                </div>
            </div>
            <div className="home-section">
                <div className="backImg">
                    <img src="./images/RiderHome.png" alt="Rider" />
                </div>
                <div className="box-section">
                    <div className="box-section-outline">
                        <div className="three-section-icon">
                            <div className="first-section-icon"><i className="fa-solid fa-car"></i><p>Ride</p></div>
                            <div className="first-section-icon"><img src="./images/EarnIcon.svg" alt="progress" /><p>Drive or Deliver</p></div>
                            <div className="first-section-icon"><i className="fa-solid fa-key"></i><p>Rent your fleet</p></div>
                        </div>
                        <div className="home-heading">
                            <h1>Request a Ride Now</h1>
                            <div className='circle'></div>
                            <i className="fa-solid fa-paper-plane"></i>
                            <input type="text" className='location-input' placeholder='Enter pickup location' autoFocus />
                            <div className='left-line'></div>
                            <div className='square'></div>
                            <input type="text" className='destination-input' placeholder='Enter destination' autoFocus />
                        </div>
                        <div className="home-button">
                            <NavLink>Request Now</NavLink>
                            <NavLink className="secondButton">Schedule for later</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content-dialogue">
                <div className="img-box">
                    <img src="./images/UpdateRider.jpg" alt="rider" className='mobile' />
                    <img src="./images/city.jpeg" alt="city" className='desktop' />
                </div>
                <div className="dialogue-text">
                    <h1>The Uber you know, reimagined for business</h1>
                    <p>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                    <NavLink>Get started</NavLink>
                </div>
            </div>

            <div className="third-section">
                <div className="main-heading">
                    <h1>Focused on safety, wherever you go</h1>
                </div>
                <div className="two-div">
                    <div className="first-div">
                        <div className="first-div-img">
                            <img src="./images/SafetyHome.jpeg" alt="safetyHome" />
                        </div>
                        <div className="first-div-description">
                            <h4>Our commitment to your safety</h4>
                            <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                            <NavLink>Read about our Community Guidelines</NavLink>
                            <NavLink>See all safety features</NavLink>
                        </div>
                    </div>
                    <div className="second-div">
                        <div className="first-div">
                            <div className="first-div-img">
                                <img src="./images/City2.jpeg" alt="city" />
                            </div>
                            <div className="first-div-description">
                                <h4>Setting 10,000+ cities in motion</h4>
                                <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                                {/* <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p> */}
                                <NavLink>View all cities</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-part2">
                    <div className="home-section-2-wrap">
                        <div className="first-div">
                            <div className="first-div-icons">
                                <img src="./images/multiPerson-icon.svg" alt="group" />
                            </div>
                            <div className="first-div-content">
                                <h5>About us</h5>
                                <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                                <NavLink>Learn more about Uber</NavLink>
                            </div>
                        </div>
                        <div className="first-div">
                            <div className="first-div-icons">
                                <img src="./images/documentIcon.svg" alt="news" />
                            </div>
                            <div className="first-div-content">
                                <h5>About us</h5>
                                <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                                <NavLink>Learn more about Uber</NavLink>
                            </div>
                        </div>
                        <div className="first-div">
                            <div className="first-div-icons">
                                <img src="./images/home-icon.svg" alt="home" />
                            </div>
                            <div className="first-div-content">
                                <h5>About us</h5>
                                <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                                <NavLink>Learn more about Uber</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vehical-section">
                    <div className="vehical-section-wrap">
                        <div className="vehical-heading">
                            <h1>Ride with Uber</h1>
                        </div>
                        <div className="vehical-section-grid">
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/Auto.png" alt="Auto" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Auto</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                                <div className="vehical-marker">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/MotorBike.png" alt="Auto" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Moto</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                                <div className="vehical-marker">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/uberHourly.jpeg" alt="Hourly" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Rentals</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                                <div className="vehical-marker">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/Intercity-car.png" alt="Car" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Intercity</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                                <div className="vehical-marker">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="uber-app-qrcode">
                <div className="qr-code-wrap-content third-section">
                    <div className="qr-code-wrap">
                        <div className="qr-code-heading">
                            <h1>It’s easier in the apps</h1>
                        </div>
                        <div className="qr-code-box-flex">
                            <div className="qr-code-box-section">
                                <div className="qrcode-img">
                                    <img src="./images/qr-code.webp" alt="qrcode" />
                                </div>
                                <div className="qrcode-content">
                                    <h4>Download the Uber App</h4>
                                    <p>Scan to download</p>
                                </div>
                                <div className="qr-code-icon">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                            <div className="qr-code-box-section">
                                <div className="qrcode-img">
                                    <img src="./images/qr-code.webp" alt="qrcode" />
                                </div>
                                <div className="qrcode-content">
                                    <h4>Download the Uber App</h4>
                                    <p>Scan to download</p>
                                </div>
                                <div className="qr-code-icon">
                                    <h1>&#8594;</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last-section third-section'>
                <div className="two-sections">
                    <div className="section-one">
                        <h1>Sign up to drive</h1>
                        <div className="last-section-icon">
                            <h1>&#8594;</h1>
                        </div>
                    </div>
                    <div className='bottom-line1'></div>
                    <div className="section-one">
                        <h1>Sign up to ride</h1>
                        <div className="last-section-icon">
                            <h1>&#8594;</h1>
                        </div>
                    </div>
                    <div className='bottom-line2'></div>
                </div>
            </div >
        </>
    )
}

export default Home