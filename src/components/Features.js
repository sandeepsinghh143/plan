import { featureData } from '@/data/featureData'
import React from 'react'
import FeatureTab from './FeatureTab'

export default function Features() {
  return (
    <div className='lg:w-[70%] w-[95%] m-auto'>
        <h1 className='text-center font-bold text-4xl'>Awesome App Features</h1>
        <div className='text-center w-[70%] m-auto my-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid vero, autem eos, quam voluptas aliquam odit esse quia architecto consequatur adipisci nisi, pariatur explicabo earum qui quo molestias placeat odio!</div>
        <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap items-center mb-20 w-[100%] gap-4 m-auto'>
            {featureData.map((feature,i)=>(
                <FeatureTab key={i} feature={feature}/>
            ))}
        </div>
    </div>
  )
}
