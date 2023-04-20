import React from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../../app/Shipmate';
import { Datepicker, Input, initTE } from "tw-elements";

initTE({ Datepicker, Input });

const SearchSection = () => {
    const location = useLocation();

    return (
        <Context.Consumer>
            {({ inputVal, setInputVal }) => <form name="search">
                <div className='search-section lg:mx-[77px]'>
                    <ul className='sm:justify-start justify-center mx-3'>
                        <li className='search-item my-3.5'>
                            <div className='input-wrapper'>
                                <span className='input-icon mx-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z" stroke="#868686" stroke-width="1.5" />
                                        <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#868686" stroke-width="1.5" />
                                    </svg>
                                </span>
                                <input type='search' name='origin'
                                    value={location.pathname == '/' ? "" : inputVal.origin}
                                    onChange={(e) => setInputVal({ ...inputVal, [e.target.name]: e.target.value })}
                                    placeholder='Origin, Port, City' />
                            </div>

                        </li>
                        <li className='search-item pr-3 my-3.5'>
                            <div className='input-wrapper'>
                                <span className='input-icon mx-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z" stroke="#868686" stroke-width="1.5" />
                                        <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#868686" stroke-width="1.5" />
                                    </svg>
                                </span>
                                <input type='search' name='destination'
                                    value={location.pathname == '/' ? "" : inputVal.destination}
                                    onChange={(e) => setInputVal({ ...inputVal, [e.target.name]: e.target.value })}
                                    placeholder='Destination, Port, City' />
                            </div>
                        </li>
                        <li className='search-item pr-3 my-3.5'>
                            <div className='input-wrapper pr-3' data-te-inline="true">

                                <span className='input-icon mx-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#868686" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.6949 13.7H15.7039M15.6949 16.7H15.7039M11.9949 13.7H12.0049M11.9949 16.7H12.0049M8.29395 13.7H8.30395M8.29395 16.7H8.30395" stroke="#868686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <div data-te-datepicker-init data-te-inline="true" data-te-input-wrapper-init>
                                    <input type="text"
                                        value={location.pathname == "/" ? "" : inputVal.date}
                                        onChange={(e) => setInputVal({ ...inputVal, [e.target.name]: e.target.value })}
                                        placeholder="13 April 2023" />
                                </div>

                            </div>
                        </li>
                        <li className='search-item pr-3 mx-2 my-3.5'>
                            <div className='input-wrapper pr-3'>
                                <span className='input-icon mx-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22V10M20.42 12.37C21.29 12.72 21.83 13.75 21.63 14.66L21.22 16.52C20.51 19.72 18 22 14.38 22H9.61998C5.99998 22 3.48998 19.72 2.77998 16.52L2.36998 14.66C2.16998 13.75 2.70998 12.72 3.57998 12.37L4.99998 11.8L10.51 9.59C11.47 9.21 12.53 9.21 13.49 9.59L19 11.8L20.42 12.37Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8ZM14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <input type='search' name='load'
                                    value={location.pathname == '/' ? "" : inputVal.load}
                                    onChange={(e) => setInputVal({ ...inputVal, [e.target.name]: e.target.value })}
                                    placeholder='Load' />
                            </div>
                        </li>
                        {location.pathname == "/results" ?
                            <button className='mx-3 my-2.5'>
                                <span className='edit-icon'>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2601 3.6L5.0501 12.29C4.7401 12.62 4.4401 13.27 4.3801 13.72L4.0101 16.96C3.8801 18.13 4.7201 18.93 5.8801 18.73L9.1001 18.18C9.5501 18.1 10.1801 17.77 10.4901 17.43L18.7001 8.74C20.1201 7.24 20.7601 5.53 18.5501 3.44C16.3501 1.37 14.6801 2.1 13.2601 3.6Z" stroke="#9747FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.89 5.05C12.0996 6.39086 12.7486 7.62414 13.735 8.55625C14.7214 9.48836 15.9894 10.0665 17.34 10.2M3 22H21" stroke="#9747FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            :
                            <button className='go-btn mx-3 my-2.5'>
                                <span className='go-icon'>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="36" height="36" rx="8" fill="#9747FF" />
                                        <path d="M20.2871 12L26 18L20.2871 24M10 18H25.84" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </button>

                        }
                    </ul>
                </div>
            </form >}
        </Context.Consumer>
    )
}

export default SearchSection