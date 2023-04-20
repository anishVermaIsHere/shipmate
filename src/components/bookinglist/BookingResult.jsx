import React from 'react'
import Stepper from '../widgets/Stepper'
import { bookingSteps, filters, resultsTabs } from '../../data/constants'
import SearchSection from '../searchform/SearchSection'
import ResultCard from './ResultCard'

const BookingResult = () => {

    const Tabs = () => {
        return resultsTabs.map((tab, index) => {
            return index == 0 ? <li className='py-[16px] lg:pr-[56px] lg:mr-[16px] tab active-tab'>
                <p className='text-[13px] font-bold text-[#9747FF]'>{tab.title}</p>
            </li>
                :
                <li className='py-[16px] lg:pr-[56px] tab'>
                    <p className='text-[13px] font-bold'>{tab.title}</p>
                </li>
        })
    }
    const Filter = () => {
        return filters.map(item => {
            return <li className='flex justify-between items-center mb-[30px]'>
                <p className='text-base font-semibold'>{item.title}</p>
                <span className='arrow-down cursor-pointer'>
                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1099 1.33958L7.49156 5.95792C6.94614 6.50333 6.05364 6.50333 5.50823 5.95792L0.889893 1.33958" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </li>
        })
    }
    
    return (
        <div className='results-section'>
            <div className="booking-steps flex items-center justify-center flex-col md:flex-row md:gap-12">
                <div className='step-service flex items-center pl-[16px] py-[18px] w-[211px]'>
                    <span className='mr-[14px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22V10M20.42 12.37C21.29 12.72 21.83 13.75 21.63 14.66L21.22 16.52C20.51 19.72 18 22 14.38 22H9.61998C5.99998 22 3.48998 19.72 2.77998 16.52L2.36998 14.66C2.16998 13.75 2.70998 12.72 3.57998 12.37L4.99998 11.8L10.51 9.59C11.47 9.21 12.53 9.21 13.49 9.59L19 11.8L20.42 12.37Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8ZM14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <p className='font-semibold text-xl text-[#868686]'>Load</p>
                </div>
                <ul data-te-stepper-init className="relative m-0 flex list-none md:justify-between overflow-hidden p-0 transition-[height] sm:w-[550px] md:w-[600px] duration-200 ease-in-out">
                    {bookingSteps.map(({ title, step, id }, index) => {
                        return index !== bookingSteps.length - 1 ?
                            <Stepper id={id} step={step} title={title} />
                            :
                            <Stepper id={id} step={step} title={title} last="last" />
                    })}
                </ul>
            </div>

            <SearchSection />
            <div style={{ border: '1px solid rgba(180, 180, 180, 0.6)', marginTop: '18px', marginInline: '-35px' }}></div>
            <div className='results-container grid grid-cols-4 lg:mx-[77px]'>
                <div className='col-span-4 lg:col-span-1 md:mr-[53px]'>
                    <p className='text-base font-bold text-left my-[39px]'>3 Top Quote <span className='font-normal'>(6 in Total)</span></p>
                    <ul>
                        <Filter />
                    </ul>
                </div>
                <div className='results-wrapper col-span-4 lg:col-span-3 mt-[18px]'>
                    <ul className='flex results-tabs flex-col lg:flex-row md:w-full md:border lg:w-[700px]'>
                        <Tabs />
                    </ul>

                    <div className='result-lists mt-[40px]'>
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingResult