import React from 'react'

const Hamburger = ({setSidebar}) => {
    const handleMenu=()=>{
        setSidebar(prev=>prev=!prev);
    }
    return (
        <span onClick={handleMenu}>
            <svg width="50" height="50" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5" />
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5" />
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5" />
                </g>
            </svg>
        </span>
    )
}

export default Hamburger