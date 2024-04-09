import { priceData } from '@/data/priceData'
import React from 'react'
import PriceCard from './PriceCard'

export default function Pricing() {
  return (
    <div className='bg-[#f7f6f6] p-20'>
        <div className='2xl:w-[70%] m-auto'>
             <div className='text-4xl font-bold text-center mb-4'>Membership Plan</div>
             <div className='text-center w-[70%] m-auto mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla voluptates quia architecto, dolor voluptatem? Pariatur, impedit. Iure aut deleniti dolorem dignissimos corporis.</div>
             <div className='flex gap-4 lg:justify-between justify-center items-center flex-wrap lg:flex-nowrap'>
                {priceData.map((card,i)=>(
                    <PriceCard key={i} card={card}/>
                ))}
             </div>
        </div>
    </div>
  )
}
