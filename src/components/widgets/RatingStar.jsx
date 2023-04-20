import React from 'react'

const RatingStar = () => {
    return [...Array(5)].map((star, ind) => {
        return ind == [...Array(5)].length - 1 ?
            <span className='rating-star ml-1 h-[13px] w-[13px]'>
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.3362 2.19585L9.4362 4.39585C9.5862 4.7021 9.9862 4.99585 10.3237 5.0521L12.3174 5.38335C13.5924 5.59585 13.8924 6.52085 12.9737 7.43335L11.4237 8.98335C11.1612 9.24585 11.0174 9.7521 11.0987 10.1146L11.5424 12.0333C11.8924 13.5521 11.0862 14.1396 9.74245 13.3459L7.8737 12.2396C7.5362 12.0396 6.97995 12.0396 6.6362 12.2396L4.76745 13.3459C3.42995 14.1396 2.61745 13.5459 2.96745 12.0333L3.4112 10.1146C3.49245 9.7521 3.3487 9.24585 3.0862 8.98335L1.5362 7.43335C0.623698 6.52085 0.917448 5.59585 2.19245 5.38335L4.1862 5.0521C4.51745 4.99585 4.91745 4.7021 5.06745 4.39585L6.16745 2.19585C6.76745 1.0021 7.74245 1.0021 8.3362 2.19585Z" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            :
            <span className='rating-star ml-1 h-[13px] w-[13px]'>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33058 1.19585L8.43058 3.39585C8.58058 3.7021 8.98058 3.99585 9.31808 4.0521L11.3118 4.38335C12.5868 4.59585 12.8868 5.52085 11.9681 6.43335L10.4181 7.98335C10.1556 8.24585 10.0118 8.7521 10.0931 9.1146L10.5368 11.0333C10.8868 12.5521 10.0806 13.1396 8.73683 12.3458L6.86808 11.2396C6.53058 11.0396 5.97433 11.0396 5.63058 11.2396L3.76183 12.3458C2.42433 13.1396 1.61183 12.5458 1.96183 11.0333L2.40558 9.1146C2.48683 8.7521 2.34308 8.24585 2.08058 7.98335L0.530583 6.43335C-0.381917 5.52085 -0.088167 4.59585 1.18683 4.38335L3.18058 4.0521C3.51183 3.99585 3.91183 3.7021 4.06183 3.39585L5.16183 1.19585C5.76183 0.00209963 6.73683 0.00209963 7.33058 1.19585Z" fill="#9747FF" />
                </svg>
            </span>

    })
}

export default RatingStar