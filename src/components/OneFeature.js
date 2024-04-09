import React from 'react'
import Image from 'next/image'
import verify from "/public/verify.svg"

export default function OneFeature({text}) {
  return (
    <div className='w-80 flex items-start gap-4 one-feature'>
        <div className='mt-1'><Image src={verify} width={50} alt='verify'/></div>
        <div>
            <div className='text-xl font-semibold'>{text}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, animi?</div>
        </div>
    </div>
  )
}
