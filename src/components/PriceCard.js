import React from 'react'
import Button from './Button'

export default function PriceCard({card}) {
  return (
    <div className='w-80 bg-white flex flex-col justify-center items-center rounded-xl price-card p-8 gap-2'>
        <div className='text-2xl font-bold'>{card.planType}</div>
        <div className='text-6xl text-[var(--red)]'>${card.price}</div>
        <div className='font-bold text-2xl text-center'>{card.access}</div>
        {card.features.map((feature,i)=>(
            <div key={i} className='mb-4 border-b border-solid border-[grey] w-[70%] text-center pb-2'>{feature}</div>
        ))}
        <Button text={"Choose Plan"}/>
    </div>
  )
}
