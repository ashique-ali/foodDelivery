import React from "react";
import './footer.css'
import logo from '../../../assets/logo.png'
import facebook from '../../../assets/facebook_icon.png' 
import twitter from '../../../assets/twitter_icon.png'
import linkedin from '../../../assets/linkedin_icon.png'
// import { assets } from "../../../assets/assets";

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='tomatologofooter' src={logo} alt="" />
                    <p>This website is just for my portfolio, it's not a real website.</p>
                    <div className="footer-social-icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 6386374397</li>
                        <li>developer.ashiq121@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Tomato.com - All rights reserved.</p>
        </div>
    )
}
export default Footer;