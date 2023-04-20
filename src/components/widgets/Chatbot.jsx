import React from 'react'

const Chatbot = () => {
  return (
    <div className='chat-bot'>
      <div className='chat-message'>
        <button aria-label='chat-bot'>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.724 14.5469H20.8386M9.77085 24.8724H14.9792L20.7735 28.7266C20.969 28.8569 21.1963 28.9317 21.431 28.9431C21.6657 28.9544 21.8992 28.9017 22.1063 28.7908C22.3135 28.6799 22.4867 28.5148 22.6074 28.3131C22.7281 28.1115 22.7918 27.8808 22.7917 27.6458V24.8724C26.6979 24.8724 29.3021 22.2682 29.3021 18.362V10.5495C29.3021 6.64323 26.6979 4.03906 22.7917 4.03906H9.77085C5.8646 4.03906 3.26044 6.64323 3.26044 10.5495V18.362C3.26044 22.2682 5.8646 24.8724 9.77085 24.8724Z" stroke="white" stroke-width="2.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default Chatbot