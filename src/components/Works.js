import React from 'react'
import Image from 'next/image'
import work from "/public/work.webp"
import OneFeature from './OneFeature'

export default function Works() {
  return (
    <div className='bg-[#f7f6f6]'>
        <div className='w-[70%] m-auto lg:flex justify-between gap-32 items-center py-10'>
            <div className='min-w-[30%]  hidden lg:block'>
                <Image src={work} className='w-full h-full rounded-[4rem]'/>
            </div>
            <div className='w-60%'>
                <div className='text-4xl font-bold'>How It's Works</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non libero voluptatibus maxime harum repellat tempora natus delectus, dolor est maiores eligendi eius blanditiis nihil dicta ab magnam culpa repellendus iusto.
                </div>
                <div className='flex flex-wrap justify-between gap-8'>
                    <OneFeature text={"Download for Free"}/>
                    <OneFeature text={"Select Membership"}/>
                    <OneFeature text={"Login Your Account"}/>
                    <OneFeature text={"Enjoy This App"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
