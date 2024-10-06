import React, { useEffect } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import './cartDrawer.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeCartItem, setCart } from '../../../featureSlice/cartSlice';

function CartDrawer() {
    const { cart } = useSelector((state) => state.cartItem);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useDispatch();

   const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

     const removeCartsItem = (id) => {
        dispatch(removeCartItem(id));
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

      useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            dispatch(setCart(JSON.parse(storedCart)));
        }
    }, [dispatch]);

    useEffect(() => {
        if (cart && cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);
    
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header bg-white">
                    <h5 id="offcanvasRightLabel" className='m-0'>Shopping Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body position-relative pt-0 bg-white d-flex flex-column">
                    {cart && cart.length > 0 ? (
                        cart.map((item) => (
                            <div key={item.id} className='pt-2 borderStyle'>
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <p className='mb-1'>{item.name}</p>
                                    <p onClick={() => removeCartsItem(item.id)} style={{ lineHeight: "0px", cursor: "pointer" }}>x</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <img className='w-25 h-100' src={`http://localhost:4000/${item.imageUrl}`} alt={item.name} />
                                    <div className=''>
                                        <p>${item.price}.00</p>
                                        <div className='quantity rounded rounded-2 d-flex justify-content-between align-items-center p-1'>
                                            <p className='m-0 w-50 text-center' style={{ fontSize: '13px' }}>
                                                <FaMinus onClick={() => handleDecrement(item.id)} />
                                            </p>
                                            {item.quantity}
                                            <p className='m-0 w-50 text-center' style={{ fontSize: '13px' }}>
                                                <FaPlus onClick={() => handleIncrement(item.id)} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className='mt-2 mb-0 pb-2'>{item.description}.</p>
                            </div>
                        ))
                    ) : (
                        <div className='cartHeading position-absolute'>
                            <h4>Your Cart is Empty</h4>
                        </div>
                    )}
                </div>

                <div className='px-3 pb-3 pt-2'>
                    <div className='d-flex justify-content-between'>
                        <h5>Subtotal</h5>
                        <span>${subtotal}.00</span>
                    </div>
                    <button className='btn btn-danger w-100'>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;
