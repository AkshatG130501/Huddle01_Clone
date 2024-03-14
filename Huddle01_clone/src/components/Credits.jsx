import React from 'react'
import twill from "../assets/twill.webp"

const Credits = () => {
  return (
    <div className='flex justify-center items-center  bg-gray-950 h-[110px]'>
        <div className='w-[80%] h-[60px] bg-gradient-to-b from-indigo-600 to-purple-600 rounded-xl flex items-center space-x-3 justify-center'>
            <p className='text-lg text-white'>Affected by</p> 
            <img className='w-[70px] h-[23px]' src={twill} alt='twill'/>
            <p className='text-lg text-white'>video sdk shutting down? Get 6 months FREE credits for Huddle01 SDK.</p>
            <button className='flex items-center justify-center w-[150px] h-[40px] bg-white rounded-lg'> 
                <p>Migration Guide</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
    </div>
  )
}

export default Credits

