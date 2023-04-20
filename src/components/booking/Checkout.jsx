import React from 'react'
import Stepper from '../widgets/Stepper'
import { bookingSteps } from '../../data/constants'
import seller from '../../assets/images/Frame 64.png'
import xcover from '../../assets/images/Xcover.png'
import Invoice from './Invoice'


const Checkout = () => {
    return (
        <section className="booking-section mt-10">
            <div className="booking-steps md:w-[600px]">
                <ul data-te-stepper-init className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                    {bookingSteps.map(({ title, step, id }, index) => {
                        return index !== bookingSteps.length - 1 ?
                            <Stepper id={id} step={step} title={title} />
                            :
                            <Stepper id={id} step={step} title={title} last="last" />
                    })}
                </ul>
            </div>

            <div className="booking-container grid grid-rows-1 md:grid-rows-9 md:grid-flow-col gap-4">
                <div className="booking-summary col-span-4 md:col-span-10">
                    <p className='summary-title'>Booking Summary</p>
                    <div>
                        <ul data-te-stepper-init className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                            <li data-te-stepper-step-ref data-te-stepper-step-active className="flex-auto">
                                <div data-te-stepper-head-ref className="flex cursor-pointer justify-center items-center pl-2 after:ml-2 after:h-[1px] after:flex-1 after:bg-[#000] after:content-['']">
                                    <span data-te-stepper-head-icon-ref className="step my-6 mr-2 flex h-[39px] items-center justify-center rounded-full text-sm font-medium text-[#fff]">
                                        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 25.5H36.5M6.015 8H31.985M27.75 1H10.25C6.75 1 5 2.75 5 6.25V25.5H33V6.25C33 2.75 31.25 1 27.75 1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9824 8V25.5M18.9824 8V25.5M25.9824 8V25.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                        </svg>

                                    </span>

                                </div>
                                <div data-te-stepper-head-text-ref className="after:flex after:text-[0.8rem] after:content-[data-content]">
                                    <span className='font-semibold text-lg'>
                                        Delhi,<br />
                                        110003 India
                                    </span>
                                </div>
                            </li>
                            <li className='ship-express'>
                                <div className='text-left'>
                                    <p className='font-medium text-sm'>Express</p>
                                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.2135 23.8485L24.819 23.3969C25.0962 23.1901 25.266 22.8698 25.2816 22.5243L25.7775 11.4929L31.6963 6.18043C32.1401 5.78206 32.207 5.11096 31.8504 4.63287L31.6472 4.36028C31.2905 3.88219 30.6283 3.75487 30.1199 4.06669L23.3401 8.22474L13.0862 6.17632C12.7657 6.11227 12.433 6.18731 12.1709 6.38274L11.6007 6.80802C10.8822 7.34388 11.023 8.45872 11.8522 8.79914L18.7646 11.6371L14.7197 15.0859C14.4835 15.2873 14.176 15.385 13.8668 15.3567L11.0421 15.0991C10.9393 15.0897 10.8341 15.0899 10.7373 15.1257C10.6585 15.1548 10.5841 15.1951 10.5164 15.2456C9.99223 15.6366 10.0627 16.4424 10.6467 16.7364L13.3513 18.0902C13.5239 18.1766 13.6419 18.3436 13.6655 18.5353L13.9935 21.1983C14.1115 21.8574 14.8818 22.1619 15.4185 21.7616C15.4654 21.7266 15.5086 21.6873 15.5477 21.6442C15.6224 21.5616 15.6627 21.4554 15.6914 21.3477L16.4533 18.4872C16.5244 18.2202 16.6891 17.9876 16.9173 17.8318L21.2024 14.9053L22.3812 23.0778C22.4985 23.9492 23.5087 24.3741 24.2135 23.8485Z" fill="black" />
                                        <line x1="11.0125" y1="10.6305" x2="1.86166" y2="17.4552" stroke="black" />
                                        <line x1="19.9533" y1="21.2549" x2="14.7243" y2="25.1547" stroke="black" />
                                        <line x1="9.84946" y1="18.6184" x2="4.62038" y2="22.5182" stroke="black" />
                                    </svg>

                                </div>
                            </li>

                            <li data-te-stepper-step-ref data-te-stepper-step-active className="">
                                <div data-te-stepper-head-ref className="flex cursor-pointer justify-center items-center pl-2">
                                    <span data-te-stepper-head-icon-ref className="my-6 mr-2 flex h-[39px] items-center justify-center rounded-full text-sm font-medium text-[#fff]">
                                        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 25.5H36.5M6.015 8H31.985M27.75 1H10.25C6.75 1 5 2.75 5 6.25V25.5H33V6.25C33 2.75 31.25 1 27.75 1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9824 8V25.5M18.9824 8V25.5M25.9824 8V25.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <div data-te-stepper-head-text-ref className="text-center">
                                    <span className='font-semibold text-lg'>
                                        Shanghai <br />
                                        200080, China
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="weight-summary text-center col-span-4 md:col-span-1">
                    <p className='weight-title'>Total Weight/Volume</p>
                    <div className='grid place-items-center'>
                        <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.0833 60.0833H37.9167C51.4583 60.0833 56.875 54.6667 56.875 41.125V24.875C56.875 11.3333 51.4583 5.91666 37.9167 5.91666H27.0833C13.5417 5.91666 8.125 11.3333 8.125 24.875V41.125C8.125 54.6667 13.5417 60.0833 27.0833 60.0833Z" stroke="#5C5C5C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M46.7187 22.9521C42.8004 19.4712 37.7412 17.5486 32.5 17.5486C27.2588 17.5486 22.1996 19.4712 18.2812 22.9521L24.1854 32.4313C26.4742 30.3905 29.4335 29.2627 32.5 29.2627C35.5665 29.2627 38.5258 30.3905 40.8146 32.4313L46.7187 22.9521Z" stroke="#5C5C5C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='font-bold text-xl'>114.21KG</p>
                    </div>

                </div>

                <div className="seller-summary col-span-4 md:col-span-5">
                    <p className='seller-title'>Seller: Primetime Worldwide</p>
                    <div className='grid my-9 place-items-center'>
                        <img src={seller} alt="primetime worldwide" />
                    </div>
                </div>

                <div className="load-summary col-span-4 md:col-span-9">
                    <p className='load-title'>Load</p>
                    <div className='grid place-items-center'>
                        <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 29.5V44.5H11.2872V40.5H36.734V45.5H47.5V29.5M1.5 29.5L5.41489 1.5H42.6064L47.5 29.5M1.5 29.5H12.7553M47.5 29.5H34.7766M33.7979 1.5L34.7766 29.5M34.7766 29.5H24.0106M24.0106 1.5V29.5M24.0106 29.5H12.7553M12.7553 29.5L13.2447 2.5" stroke="#5C5C5C" stroke-width="3" />
                        </svg>
                        <p className='load-qty font-bold text-2xl'>1 X</p>
                        <p className='font-bold text-base'>Pallets</p>
                        <p className='font-normal text-base'>230 X 140 X  120 CM</p>
                    </div>
                </div>
                <div className="insurance-summary col-span-4 md:col-span-5">
                    <p className='insurance-title'>Insurance: Xcover.com</p>
                    <div className='grid my-9 place-items-center'>
                        <img src={xcover} alt="xcover" />
                    </div>
                </div>
                
                <Invoice />
            </div>
        </section >

    )
}

export default Checkout