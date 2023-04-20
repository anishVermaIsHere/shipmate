import React, { useState } from 'react'
import Header from '../components/header/Header'
import Container from '../components/container/Container'
import Chatbot from '../components/widgets/Chatbot'
import Footer from '../components/footer/Footer'
import { createContext } from 'react'

export const Context = createContext();

const Shipmate = () => {
  const [inputVal, setInputVal] = useState({
    origin: 'Delhi, 110003',
    destination: 'Shanghai 200080',
    date: '13 April 2023',
    load: '114.21KG - AIR'
  })

  return (
    <div className='layout'>
      <div className="App">
        <Context.Provider value={{inputVal, setInputVal}}>
          <Chatbot />
          <Header />
          <Container />
          <Footer />
        </Context.Provider>
      </div>
    </div>

  )
}

export default Shipmate