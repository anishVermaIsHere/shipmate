import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Checkout from '../../components/booking/Checkout'
import Error404 from '../../pages/404'
import BookingResult from '../../components/bookinglist/BookingResult'


const approutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/results" element={<BookingResult />}/>
        <Route path="*" element={<Error404 />}/>
        
    </Routes>
  )
}

export default approutes