import React from 'react'

const Service = ({icon,color,title,content,id}) => {
  return (
    <div className='service-card col-4' key={id}>
        <div className='flex items-center'>
            <span className='service-icon mr-6' style={{color:color}}>{icon}</span>
            <p className='font-medium text-xl'>{title}</p>
        </div>
        <div style={{border:'0.7px solid #9E9E9E', margin:'20px 0'}}></div>
        <div className='content'>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Service