import React from 'react'

const Message = ({ variant = 'alert-info', children }) => {
   return (
      <div className='d-flex justify-content-center col-12'>
         <div className={`alert ${variant}`}>{children}</div>
      </div>
   )
}

export default Message
