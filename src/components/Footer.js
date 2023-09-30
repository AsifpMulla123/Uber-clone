import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="uber-logo">
            <h2>Uber</h2>
            <p>Visit Help Center</p>
          </div>
          <div className="row-part">
            <div className="first-part">
              <ul>
                <h2>Company</h2>
                <li><NavLink>About us</NavLink></li>
                <li><NavLink>Our offerings</NavLink></li>
                <li><NavLink>NewsRoom</NavLink></li>
                <li><NavLink>Investor</NavLink></li>
                <li><NavLink>Blog</NavLink></li>
                <li><NavLink>Careers</NavLink></li>
                <li><NavLink>AI</NavLink></li>
                <li><NavLink>Gift cards</NavLink></li>
              </ul>
            </div>
            <div className="first-part">
              <ul className='center-text'>
                <h2>Products</h2>
                <li><NavLink>Ride</NavLink></li>
                <li><NavLink>Drive</NavLink></li>
                <li><NavLink>Deliver</NavLink></li>
                <li><NavLink>Eat</NavLink></li>
                <li><NavLink>Uber for Business</NavLink></li>
                <li><NavLink>Uber Freight</NavLink></li>
              </ul>
            </div>
            <div className="first-part">
              <ul className='center-text'>
                <h2>Global citizenship</h2>
                <li><NavLink>Safety</NavLink></li>
                <li><NavLink>Diversity and Inclusion</NavLink></li>
                <li><NavLink>Sustainability</NavLink></li>
              </ul>
            </div>
            <div className="first-part">
              <ul className='center-text'>
                <h2>Travel</h2>
                <li><NavLink>Reserve</NavLink></li>
                <li><NavLink>Airports</NavLink></li>
                <li><NavLink>Cities</NavLink></li>
              </ul>
            </div>
          </div>
          {/* icons */}
          <div className="icons">
            <p><i className="fa-brands fa-square-facebook"></i></p>
            <p><i className="fa-brands fa-twitter"></i></p>
            <p><i className="fa-brands fa-youtube"></i></p>
            <p><i className="fa-brands fa-linkedin"></i></p>
            <p><i className="fa-brands fa-instagram"></i></p>
            <p className='english-left'><i className="gg-globe-alt"></i>English</p>
            <p className='location'><i className="fa-solid fa-location-dot"></i>Banglore</p>
          </div>
          <div className="playstore-icons">
            <img src="./images/google-play-store.svg" alt="Google playstore" />
            <img src="./images/Apple-play-store.svg" alt="Apple playstore" />
          </div>

          <div className="privacy-rights">
            <p>© 2023 Uber Technologies Inc.</p>
            <div className="pr2">
              <p>Privacy</p>
              <p>Accessibility</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer