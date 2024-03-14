import React from 'react'
import globe from "../assets/globe.png"

const Comp1 = () => {
  return (
    <div className='flex justify-center bg-gray-950 h-[800px]'>
        <div className='w-[80%] h-[700px] bg-gray-950 rounded-3xl border-[0.075rem] border-gray-100/20'>
          <div className='flex justify-center mt-10'>
            <button className='text-gray-500'>
              <div className='flex w-[400px] h-[30px] bg-gray-900 rounded-2xl items-center'>
                <div className='text-blue-200 text-sm ml-1 h-[23px] w-[105px] justify-center rounded-xl flex items-center bg-slate-800'>Node Operator</div>
                <p className='text-white text-sm ml-2'>Join the waiting list for running a node</p>
                <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </button>
          </div>
          <div className='flex justify-center flex-col items-center space-y-4 mt-4 '>
            <p className='text-white text-7xl tracking-wide font-semibold'>People-powered</p>
            <p className='text-white text-7xl tracking-wide font-semibold'>Communication</p>
          </div>
          <div className='flex justify-center flex-col items-center space-y-1 mt-7'>
            <p className='text-white text-lg'>Building the 1st DePIN for RTC to democratize connectivity over cyberspace. </p>
            <p className='text-white text-lg'>Leverage our current suite of SDKs to build high-quality audio/video applications in minutes.</p>
          </div>
          <div className='flex justify-center space-x-3 mt-12'>
            <button className='w-[200px] h-[50px] bg-white rounded-lg text-lg font-semibold'>Start Building</button>
            <button className='w-[200px] h-[50px] bg-slate-800 rounded-lg flex items-center justify-center space-x-1'>
              <p className='text-lg font-semibold text-slate-200'>Discover Network</p>
              <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
          <div className='flex justify-center overflow-hidden h-[267px]'>
            <img className='w-[600px] h-[600px] ' src={globe}/>
          </div>
        </div>
    </div>
  )
}

export default Comp1