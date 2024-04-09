import React from 'react'
import rockstar from "/public/rockstar.jpg";
import Image from "next/image"
import Button from './Button';
import music from "/public/music.webp";

export default function HeroSection() {
  return (
    <div className="w-full h-screen relative hero-section overflow-hidden">
        <div className='absolute xl:top-20 z-40 text-white flex md:flex-row flex-col justify-between items-center xl:gap-60 md:gap-40 gap-20 md:max-w-[70%] h-full 2xl:left-[15%] md:left-[10%]'>
            {/* left */}
            <div className='md:w-[50%] w-[80%] m-auto md:m-0 mt-[300px] md:mt-0 flex flex-col justify-between items-center gap-4 md:block'>
                <div className='text-xl'>Make your day colorful with</div>
                <div className='lg:text-4xl text-2xl font-semibold text-[var(--red)] my-4 tracking-widest'>This Application</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veritatis et iure fugiat suscipit tempora odio id ab fugit sequi.</div>
                <div className='flex flex-col sm:flex-row gap-8 my-4'>
                    <input type="email" name="" id="" placeholder='Enter Your Email' className='px-4 sm:py-0 py-3'/>
                    <Button text={"Free Trial"}/>
                </div>
            </div>
            {/* image */}
            <div className='md:min-w-[40%] min-w-screen xl:h-[calc(100%-200px)] z-30 hidden md:block'>
                <Image src={music} className='max-h-full min-w-[80%] z-40'/>
            </div>
        </div>
        <Image src={rockstar} 

        alt='background-image' 
        className='object-cover m-0 p-0 -z-10'
        fill={true}/>
        <div className='w-full h-full bg-black opacity-70'></div>
    </div>
  )
}
