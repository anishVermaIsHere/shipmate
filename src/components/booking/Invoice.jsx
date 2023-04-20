import React from 'react'
import { NavLink } from 'react-router-dom'

const Invoice = () => {
    return (
        <div className="invoice-container lg:px-10 lg:ml-14 col-span-4 md:col-span-6 md:row-span-3">
            <div className='booking-invoice'>
                <div className='invoice-heading flex mb-[37px]'>
                    <p className='invoice-title'>Price details</p>
                    <div className='invoice-tag ml-6'>
                        <span className='star'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.74379 1.84779L7.60455 3.5693C7.72192 3.80894 8.03493 4.0388 8.29902 4.08282L9.85914 4.34203C10.8568 4.50831 11.0916 5.23213 10.3727 5.94616L9.15978 7.15905C8.95437 7.36445 8.84188 7.7606 8.90546 8.04426L9.2527 9.54569C9.52658 10.7341 8.89568 11.1938 7.84419 10.5727L6.38188 9.70708C6.11779 9.55058 5.68252 9.55058 5.41353 9.70708L3.95122 10.5727C2.90462 11.1938 2.26884 10.7292 2.54271 9.54569L2.88995 8.04426C2.95353 7.7606 2.84104 7.36445 2.63564 7.15905L1.42275 5.94616C0.708716 5.23213 0.938577 4.50831 1.93627 4.34203L3.49639 4.08282C3.7556 4.0388 4.0686 3.80894 4.18598 3.5693L5.04673 1.84779C5.51624 0.913673 6.27918 0.913673 6.74379 1.84779Z" fill="black" />
                            </svg>
                        </span>
                        <span className='invoice-tag-title ml-3'>
                            Known shipper
                        </span>
                    </div>
                </div>

                <div className='invoice-summary'>
                    <ul className='invoice-summary-item flex justify-between text-[#808080] pb-[20px] border-b-[1px] border-[rgba(179, 179, 179, 0.5)]'>
                        <li className='text-base font-normal'>Seller’s Quote</li>
                        <li className='text-base font-normal'>$ 3,659.25</li>
                    </ul>
                    <ul className='invoice-summary-item flex justify-between text-[#808080] py-[20px]'>
                        <li className='text-base font-normal'>Duties and taxes</li>
                        <li className='text-base font-normal'>Not Included</li>
                    </ul>
                    <ul className='invoice-summary-item flex justify-between text-[#808080] py-[20px] border-b-[1px] border-[rgba(179, 179, 179, 0.5)]'>
                        <li className='text-base font-normal'>
                            Insurance <br />
                            <span className='text-[13px] font-normal'>Based on the items cost</span>
                        </li>
                        <li className='text-base font-normal'>$323.40</li>
                    </ul>
                    <ul className='invoice-summary-item flex-col justify-between text-[#808080] py-[20px] border-b-[1px] border-[rgba(179, 179, 179, 0.5)]'>
                        <li className='text-base font-normal'>Add a <NavLink to="#" style={{ color: '#6F57E9' }}>promo code</NavLink></li>
                        <li className='text-base font-normal flex justify-between'>
                            <span>Platform fee </span>
                            <span className='text-base font-normal'>$119.48</span>
                        </li>
                    </ul>
                </div>

                <div className='invoice-total flex justify-between mt-[26px]'>
                    <p className='grand-total-text'>Total:</p>
                    <p className='grand-total'>$ 4,102.13</p>
                </div>

                <div className='checkout mt-[66px]'>
                    <button className='checkout-btn font-bold text-[23px] w-full'>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default Invoice