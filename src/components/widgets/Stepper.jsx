import React from 'react'
import { useLocation } from 'react-router-dom'

const Stepper = ({
    title,
    step,
    last,
    id
}) => {

    const location = useLocation();

    return !last ? <li data-te-stepper-step-ref data-te-stepper-step-active className="w-[4.5rem] flex-auto" key={id}>
        <div data-te-stepper-head-ref className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-[2px] after:w-full after:flex-1 after:bg-[#D3B0FF] after:content-[''] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span data-te-stepper-head-icon-ref className="step my-6 mr-2 flex h-[39px] w-[39px] items-center justify-center rounded-full bg-[#D3B0FF] text-sm font-medium text-[#fff]">
                {step}
            </span>

        </div>
        <div data-te-stepper-head-text-ref className="font-medium text-sm after:flex after:text-[0.8rem] after:content-[data-content]">
            {title}
        </div>
    </li>
        :
        <li data-te-stepper-step-ref data-te-stepper-step-active className="w-[4.5rem] flex-auto" key={id}>
            <div data-te-stepper-head-ref className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-[2px] after:w-full after:flex-1 after:content-[''] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                {location.pathname==='/results' ?
                    <><span data-te-stepper-head-icon-ref className="step my-6 mr-2 flex h-[39px] w-[39px] items-center justify-center rounded-full bg-[#868686] text-sm font-medium text-[#fff]">
                    
                    </span>
                    <br />
                    </>
                    :
                    <><span data-te-stepper-head-icon-ref className="step my-6 mr-2 flex h-[39px] w-[39px] items-center justify-center rounded-full bg-[#D3B0FF] text-sm font-medium text-[#fff]">
                        {step}
                    </span>
                    <br />
                    </>
                }
            </div>
            <div data-te-stepper-head-text-ref className="font-medium text-sm after:flex after:text-[0.8rem] after:content-[data-content]">
                {title}
            </div>
        </li>

}

export default Stepper