import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket_icon.png';
import { Link } from 'react-router-dom';
import Contact from '../Contact/contact';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartDrawer from '../pages/Cart/cartDrawer';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cart } = useSelector((item) => item.cartItem);
    const [menu, setMenu] = useState("home");
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showpassword, setshowpassword] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [formData, setformData] = useState({ "email": '', "password": '' })

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleopenModel2 = () => {
        setShowModal2(true);
    };

    const togglePassword = () => {
        setshowpassword(!showpassword)
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const loginHandle = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const fetchLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json()
            if (response.ok) {
                toast.success(responseData.message)
            } else {
                toast.error(responseData.message)
            }
            setformData({
                email: "",
                password: "",
            })
        } catch (error) {
            console.log("Error ::>>", error);
        }
    }

    return (
        <div className='pageWidth' style={{
            background: darkMode ? 'black' : 'white',
        }}>
            <ToastContainer />
            <div className='menubar d-flex align-items-center justify-content-between p-4 px-0'>
                <div className='logoWidth'>
                    <img src={logo} alt="Logo" />
                </div>
                <ul className='navlink d-flex gap-5'>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <li>Contact Us</li>
                    <li>FAQ's</li>
                </ul>

                <div className='d-flex gap-4'>
                    <span className='darmodeBtn' onClick={toggleDarkMode}>
                        {darkMode ? <MdOutlineDarkMode /> : <CiLight />}
                    </span>
                    <div className='basketIcon position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <img src={basket} alt="Basket" />
                        <p className='total position-absolute'>{cart.length}</p>
                    </div>
                    <button className='signIn' onClick={handleShowModal}>Sign In</button>
                </div>
            </div>

            {showModal && (
                <div className="custom-modal-overlay">
                    {!showModal2 ?
                        <div className="custom-modal">
                            <div className="custom-modal-header">
                                <h4 className="custom-modal-title fw-bold">Sign In</h4>
                                <button type="button" className="custom-btn-close" onClick={handleCloseModal}>×</button>
                            </div>
                            <div className="custom-modal-body">
                                <form onSubmit={fetchLogin}>
                                    <div className='form-group'>
                                        <input type='text' id='email' name='email' value={formData.email} onChange={loginHandle} className='form-control' placeholder='Your Email' />
                                    </div>
                                    <div className='position-relative'>
                                        <div className='form-group mt-4'>
                                            <input type={showpassword ? 'text' : 'password'} id='password' name='password' value={formData.password} onChange={loginHandle} className='form-control' placeholder='Your Password' />
                                        </div>
                                        <div className='eyeIcon position-absolute' onClick={togglePassword}>
                                            {showpassword ? <IoEye /> : < IoEyeOff />}
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <button type="submit" className='btnColor w-100'>Sign In</button>
                                    </div>
                                </form>
                                <p className='mt-3 text-center'>Don't have an account? <Link className='login-link' onClick={handleopenModel2}>Sign Up</Link></p>
                            </div>
                        </div>
                        :
                        <Contact setShowModal={setShowModal} />
                    }
                </div>
            )}
            <CartDrawer />
        </div>
    );
};

export default Navbar;
