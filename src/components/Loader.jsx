import React from 'react'
import logo from '../assets/loadingLogo.mp4'
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <video src={logo} muted autoPlay className='controls-none w-18 h-18 rounded-full'></video>
    </div>
  )
}

export default Loader