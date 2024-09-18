import React from 'react'
import food1 from '../.././../assets/food_1.png'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './cartDrawer.css'

function CartDrawer() {
    return (
        <div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header bg-white">
                    <h5 id="offcanvasRightLabel" className='m-0'>Shopping Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body bg-white d-flex flex-column justify-content-between">
                    <div className=''>
                        <p>Ripple Ice Cream</p>
                        <div className='d-flex justify-content-between'>
                            <img className='w-25 rounded rounded-3' src={food1} />
                            <div>
                                <p>$199.00</p>
                                <div className='quantity rounded rounded-2 d-flex justify-content-between align-items-center p-1'>
                                    <p className='m-0 w-50 text-center'><FaMinus /></p>
                                    1
                                    <p className='m-0 w-50 text-center' style={{fontSize: '13px'}}><FaPlus /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h5>Total</h5>
                            <span>$2399.00</span>
                        </div>
                        <button className='btn btn-danger w-100'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDrawer
