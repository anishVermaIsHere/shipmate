import React from 'react'
import seller from '../../assets/images/Frame 64.png'
import RatingStar from '../widgets/RatingStar'
import { NavLink } from 'react-router-dom'

const ResultCard = () => {
    return (
        <div className='result-card flex justify-between items-center lg:w-[791px] mb-[18px] px-[29px] py-[18px]'>
            <div>
                <div className=''>
                    <ul className='flex'>
                        <li className='flex items-center py-[10px] px-[13.5px] rounded-[12px] bg-[#AFFFAD]'>
                            <p className='rounded-[50%] mr-[10px] h-[9px] w-[9px] bg-[#05FF00]'></p>
                            <p className='bg-[#AFFFAD] font-normal text-sm'>Best Value</p>
                        </li>
                        <li className='flex items-center py-[10px] px-[13.5px] rounded-[12px] ml-[24px]'>
                            <p className='font-normal text-sm text-[#FF0000]'>Express</p>
                        </li>
                        <li className='flex items-center my-[10px] px-[13.5px] border-l-2 border-[rgba(177, 177, 177, 0.6)]'>
                            <p className='font-normal text-sm text-[#565656]'>Est. 5 days</p>
                        </li>
                    </ul>
                    <div className='flex mt-[21px]'>
                        <div className='flex'>
                            <span className='mr-1'>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z" stroke="#868686" stroke-width="1.5" />
                                    <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#868686" stroke-width="1.5" />
                                </svg>
                            </span>
                            <span className='text-[#565656] text-[13px] font-normal'>
                                110003, Delhi
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <div className='h-[2px] w-[28px] bg-[#565656] mx-2'></div>
                            <span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.02007 14.96L7.57341 13.6533C7.80674 13.4533 8.19341 13.4533 8.42674 13.6533L9.98007 14.96C10.3401 15.14 10.7801 14.96 10.9134 14.5733L11.2067 13.6867C11.2801 13.4733 11.2067 13.16 11.0467 13L9.53341 11.48C9.42007 11.3733 9.33341 11.16 9.33341 11.0067V9.10667C9.33341 8.82667 9.54007 8.69333 9.80007 8.8L13.0734 10.2133C13.5867 10.4333 14.0067 10.16 14.0067 9.6V8.74C14.0067 8.29333 13.6734 7.78 13.2601 7.60667L9.53341 6C9.47629 5.97068 9.42781 5.92697 9.39273 5.87319C9.35766 5.81942 9.33721 5.75742 9.33341 5.69333V3.69333C9.33341 3.06667 8.87341 2.32667 8.31341 2.04C8.11341 1.94 7.88007 1.94 7.68007 2.04C7.12008 2.32667 6.66007 3.07333 6.66007 3.7V5.7C6.66007 5.82 6.56674 5.96 6.46007 6.00667L2.74007 7.61333C2.32674 7.78 1.99341 8.29333 1.99341 8.74V9.6C1.99341 10.16 2.41341 10.4333 2.92674 10.2133L6.20007 8.8C6.45341 8.68667 6.66674 8.82667 6.66674 9.10667V11.0067C6.66674 11.16 6.58007 11.3733 6.47341 11.48L4.96007 13C4.80007 13.16 4.72674 13.4667 4.80007 13.6867L5.09341 14.5733C5.21341 14.96 5.65341 15.1467 6.02007 14.96Z" stroke="#565656" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <div className='h-[2px] w-[28px] bg-[#565656] mx-2'></div>

                        </div>
                        <div className='flex'>
                            <span className='mr-1'>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z" stroke="#868686" stroke-width="1.5" />
                                    <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#868686" stroke-width="1.5" />
                                </svg>
                            </span>
                            <span className='text-[#565656] text-[13px] font-normal'>
                                200080, Shanghai
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex items-center mt-[25px] gap-2'>
                        <img src={seller} className='h-[15px] w-[20px]' alt="seller" />
                        <p className='text-[11px]'>Primetime Worldwide</p>
                    </div>

                    <div className='flex items-center mt-[25px] ml-4'>
                        <RatingStar />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center border-l-2 border-[rgba(177, 177, 177, 0.6)] pl-[20px]'>
                <p className='text-[19px] font-bold mb-[14px]'>$ 3,982. <span className='text-[70%]'>63</span></p>
                <button className='bg-[#6F57E9] text-[#fff] rounded-[14px] px-[28px] py-[10px] font-normal text-center'>
                    Select
                </button>
                <NavLink to='#' className='font-normal text-[11px] mt-[4px] underline underline-offset-1'>View details</NavLink>
            </div>
        </div>
    )
}

export default ResultCard