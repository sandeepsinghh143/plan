import React from 'react'
import Image from "next/image"
import screenshot from "/public/screenshot.jpg";

export default function Screenshots() {
  return (
    <div className='w-[70%] m-auto my-20'>
        <div className='text-4xl font-bold text-center mb-4'>App Screenshots</div>
        <div className='text-center w-[70%] m-auto mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem dolorem laborum excepturi. Nam in ea aperiam esse, dolores error. Aspernatur sequi, consectetur a, quasi iste et ut corrupti ea accusamus.</div>
        <Image src={screenshot} alt='screenshots'/>
    </div>
  )
}
