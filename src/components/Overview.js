import React from 'react'
import Image from "next/image";
import play from "/public/play.svg"

export default function Overview() {
  return (
    <div className='overview p-20'>
        <div className='text-3xl text-center mb-20 font-semibold'>Take quick overview</div>
        <div>
            <Image src={play} width={50} className='m-auto'/>
        </div>
        <div className='text-center mt-20 text-3xl font-semibold'>of this App</div>
    </div>
  )
}
