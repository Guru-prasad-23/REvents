import React from 'react'

const Contact = () => {
  return (
    <div className='mt-28 h-max m-auto flex justify-center items-center flex-col bg-black/30 p-6 text-white'>
        <h1 className='text-5xl font-extrabold font-display'>Contact Us</h1>
        <form action="" className="grid grid-cols-2 gap-6 place">
            <div className='flex flex-col'>
                <label htmlFor="" className='text-xl'>Name</label>
                <input type="text" className='border p-2'/>
            </div>
            <div className='flex flex-col justify-center'>
                <label htmlFor="" className='text-xl'>Email</label>
                <input type="text" className='border p-2'/>
            </div>
            <div className='flex flex-col justify-center'>
                <label htmlFor="" className='text-xl'>Location</label>
                <input type="text" className='border p-2'/>
            </div>
            <div className='flex flex-col justify-center'>
                <label htmlFor="" className='text-xl'>Message</label>
                <textarea name="" id=""></textarea>
            </div>
            <div className='flex'>
                <button>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Contact