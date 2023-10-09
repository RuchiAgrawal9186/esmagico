import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>

      <div className='leftfooter'>
        <div className='imagediv'></div>
        <p>© 2020 Speakin All rights reserved</p>
      </div>

      <div className='rightfooter'>
        <input type="text" placeholder='Enter your mail ID' />
        <button>Subscribe</button>
      </div>

    </div>
  )
}

export default Footer