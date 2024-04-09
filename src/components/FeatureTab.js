import React from 'react'
import Image from "next/image"

export default function FeatureTab({feature}) {
  return (
    <div className='my-8 border border-solid border-[#cdcecd] w-96 h-72 flex flex-col gap-4 items-center justify-center rounded-xl feature-box p-2'>
        <div>
            <Image src={feature.icon} width={40} alt={feature.title}/>
        </div>
        <div className={`text-xl font-semibold text-center ${feature.textBlack ? "text-black" : "text-[var(--red)]"}`}>{feature.title}</div>
        <div className='text-center'>{feature.desc}</div>
    </div>
  )
}
