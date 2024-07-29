import React from 'react'

const Footer = () => {
  return (
    <footer>
       <div className='container'>
          <p className='copyright'>&copy; Eblog All Right Reserved {new Date().getFullYear()}</p>
       </div>
    </footer>
  )
}

export default Footer