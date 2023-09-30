import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ({ showLanguages, showCompany }) => {

    const showMobileMenu = () => {
        const a = document.querySelector(".mobile-view-navbar");
        const cancle = document.getElementById('cancle');
        const menu = document.getElementById('menu');
        cancle.classList.add('view');
        menu.classList.add('viewmenu');
        a.classList.add('phoneshow');
    }
    const HideMobileMenu = () => {
        const a = document.querySelector(".mobile-view-navbar");
        const menu = document.getElementById('menu');
        const cancle = document.getElementById('cancle');
        menu.classList.remove('viewmenu');
        cancle.classList.remove('view');
        a.classList.remove('phoneshow');
    }
    const SignUpHide = () => {
        let mobilehide = document.querySelector('.mobile-hide');
        let footer = document.querySelector('.footer');
        let mobileMenu = document.querySelector('.mobile-menu');

        mobilehide.classList.toggle('spmobile');
        footer.classList.toggle('spfooter');
        mobileMenu.classList.toggle("spmobileHide");
    }
    const SignInHide = () => {
        let mbhide = document.querySelector('.mobile-hide');
        let footerhide = document.querySelector('.footer');
        let mobMenuhide = document.querySelector('.mobile-menu');

        mbhide.classList.toggle('simobile');
        footerhide.classList.toggle('sifooter');
        mobMenuhide.classList.toggle("simobileHide");
    }
    return (
        <>
            <div className='navbar'>
                <div className="nav-ele third-section">
                    <div className="nav-component">
                        <ul>
                            <li><NavLink to="/" ><h2>Uber</h2></NavLink></li>
                            <li className='company mobile-hide' ><NavLink to="/" >Company</NavLink><i className="fa-solid fa-chevron-down" onClick={showCompany}></i></li>
                            <li className='mobile-hide'><NavLink to="/about">Safety</NavLink></li>
                            <li className='mobile-hide'><NavLink to="/contact">Help</NavLink></li>
                        </ul>
                    </div>
                    <div className="mobile-menu">
                        <div className="mobile-menu-buttons">
                            <NavLink className="one" to="/signin">LogIn</NavLink>
                            <NavLink className="two" to="/signup">SignUp</NavLink>
                        </div>
                        <div className="menu-icon">
                            <i className="fa-solid fa-bars" onClick={showMobileMenu} id='menu'></i>
                            <i className="fa-solid fa-xmark" id='cancle' onClick={HideMobileMenu}></i>
                        </div>
                    </div>
                    <div className="right-side mobile-hide">
                        <ul>
                            <li id='languages'><i className="gg-globe-alt"></i><NavLink to="/" onClick={showLanguages} >EN</NavLink></li>
                            <li><NavLink to="/" >Products</NavLink></li>
                            <li><NavLink to="/signin" onClick={SignInHide}>Log in</NavLink></li>
                            <li><NavLink to="/signup" className="box-white" onClick={SignUpHide}>Sign up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar