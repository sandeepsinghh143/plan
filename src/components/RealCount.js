import React from 'react'
import Image from "next/image"

export default function RealCount({real}) {
  return (
    <div className='border border-solid border-[#cdcecd] w-64 h-52 flex flex-col gap-4 items-center justify-center rounded-xl count-box'>
        <div>
            <Image src={real.icon} width={40} alt={"real-img"}/>
        </div>
        <div className='text-4xl font-semibold text-[var(--red)]'>{real.count}</div>
        <div>{real.text}</div>
    </div>
  )
}
