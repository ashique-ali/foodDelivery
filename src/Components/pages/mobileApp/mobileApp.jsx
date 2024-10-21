import React from 'react';
import './mobileApp.css';
import mobileApp from '../../../assets/mobile.png'
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa6";

const Mobileapp = () => {
    return (
        <section className="app-promo text-center mt-5 pt-4">
            <div className="playstore">
                <div className="playstoreRow d-flex justify-content-between">
                    <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-start text-start">
                        <h4 className="text-uppercase fw-bold mb-3">Free Delivery!</h4>
                        <h1 className="display-4 fw-bold mb-3">Download the App now!</h1>
                        <p className="lead textSize mb-4">
                            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
                            pulvinar ipsum mauris etiam mattis nisl.
                        </p>
                        <div className='d-flex gap'>
                            <a href="https://play.google.com/store/games?hl=en&pli=1" className="d-flex gap-2 align-items-center btn btn-outline-danger btn-lg" style={{letterSpacing: '2px'}}>
                                <span style={{fontSize: '14px'}}><FaGooglePlay /></span><h5 className='fontSize'>Google Play</h5>
                            </a>
                            <a href="#" className="btn d-flex gap-2 align-items-center btn-outline-danger btn-lg" style={{letterSpacing: '2px'}}>
                                <span style={{fontSize: '14px'}}><FaAppStore /></span> App Store
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end col-lg-6 col-sm-12 mobileApp">
                        <div className="phone-image">
                            <img src={mobileApp} alt="App Promo" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobileapp;
