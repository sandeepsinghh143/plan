import { realData } from '@/data/realData'
import React from 'react'
import RealCount from './RealCount'
export default function RealTime() {
  return (
    <div className='md:mt-32 mt-10 flex md:justify-between justify-center flex-wrap md:flex-nowrap items-center mb-20 lg:w-[70%] w-[95%] m-auto gap-2'>
        {realData.map((real,i)=>{
            return (
                <RealCount key={i} real={real}/>
            )
        })}
    </div>
  )
}
