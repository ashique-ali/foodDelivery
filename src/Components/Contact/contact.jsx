import React, { useState } from 'react';
import './contact.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ setShowModal }) => {
    const [password, setPassword] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        mobileNo: '',
        email: '',
        password: ''
    })
    const HandleClose = () => {
        setShowModal(false);
    };

    const togglebuton = () => {
        setPassword(!password);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (response.ok) {
                toast.success(responseData.message);
                setFormData({
                    firstName: "",
                    mobileNo: "",
                    email: "",
                    password: ""
                });
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.log('Error ::>>', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="signup-modal border rounded shadow p-4">
                <div className="modal-header justify-content-between">
                    <h2 className='m-0'>Sign Up</h2>
                    <button type="button" className="custom-btn-close" onClick={HandleClose}>×</button>
                </div>
                <div className="modal-body mt-4">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" id="userName" name='userName' value={formData.firstName} onChange={handleChange} placeholder="Your name" required />
                        <input type="text" className="form-control" id='mobileNo' name='mobileNo' value={formData.mobileNo} onChange={handleChange} placeholder="Your Mobile" required />
                        <input type="email" className="form-control" id='email' name='email' value={formData.email} onChange={handleChange} placeholder="Your email" required />
                        <div className='position-relative'>
                            <div className='form-group'>
                                <input type={password ? 'text' : 'password'} id='password' name='password' value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" required />
                            </div>
                            <div className='eyeIcon position-absolute' onClick={togglebuton}>
                                {password ? <IoEye /> : <IoEyeOff />}
                            </div>
                        </div>
                        <button type="submit" className="btn-signup btn-block mt-3">Create account</button>
                        <p className="mt-3 text-center">
                            Already have an account?
                            <a href="#" className="login-link">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
