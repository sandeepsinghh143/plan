import React from 'react'
import Button from './Button'
import { GrWindows } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-[#f7f6f6] footer relative overflow-hidden'>
        <div className=' lg:w-[70%] m-auto text-white py-40 z-10 relative flex flex-col justify-between items-center gap-8 footer-inner'>
          <div className='text-4xl text-center text-[var(--red)] font-bold'>Subscribe to our newsletter</div>
          <div className='text-center w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo cum quas labore magni natus iusto impedit officiis maxime nesciunt alias iure, autem libero molestiae expedita, voluptatem deserunt. Laudantium nostrum fuga quod nobis.
          </div>
          <div className='flex flex-wrap justify-center items-center gap-8 w-[70%] subscribe-div'>
            <div className='w-[80%]'><input type="email" name="" id="" placeholder='Enter your Email' className='w-full p-2'/></div>
            <Button text={"Subscribe"}/>
          </div>
          <div className='flex flex-wrap justify-between items-center w-full footer-link'>
            <div>
              <div className='text-2xl font-semibold text-[var(--red)]'>Our Office</div>
              <div>3rd Floor, Estate House 200 North</div>
              <div>City,Altantica SA 3000</div>
            </div>
            <div>
              <div className='text-2xl font-semibold text-[var(--red)]'>Contact Info</div>
              <div>Cell: 0123 456 789 0, 0123 456 789 0 </div>
              <div>E-mail: username@yourmail.com</div>
            </div>
            <div>
              <div className='border-2 border-solid border-[var(--red)] rounded-lg p-4 min-w-52 flex justify-between items-center font-semibold mb-2 app-download cursor-pointer'>Download App From <GrWindows className='text-2xl'/></div>
              <div className='flex gap-2 items-center '>Follow Us On :<FiInstagram className='text-[var(--red)] text-xl cursor-pointer'/><FaFacebookF className='text-[var(--red)] text-xl cursor-pointer'/><FaTwitter className='text-[var(--red)] text-xl cursor-pointer'/></div>
            </div>
            <div>
              <div className='border-2 border-solid border-[var(--red)] rounded-lg p-4 min-w-52 flex justify-between items-center font-semibold mb-2 app-download cursor-pointer'>Download App From <BsApple className='text-2xl'/></div>
              <div>Support : 24/7</div>
            </div>

          </div>
          <div className='text-xl font-semibold text-center bg-[var(--red)] w-screen p-6 absolute bottom-0'>&copy; Copyrights musicapp_Design. All rights reserved.<sup>&reg;</sup></div>
        </div>
    </div>
  )
}

