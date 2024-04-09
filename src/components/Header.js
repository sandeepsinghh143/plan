import React from 'react';
import Link from "next/link";
import Button from './Button';
import { TiThMenu } from "react-icons/ti"
import SwipeableTemporaryDrawer from './Drawer';

export default function Header() {
  return (
    <header className='fixed w-full z-50 header'>
      <div className='bg-white flex justify-between items-center xl:w-[70%] lg:w-[85%] w-[80%] pt-4 m-auto'>
        <h1 className='text-4xl font-bold'>Logo</h1>
        <nav className='lg:flex justify-between items-center gap-8 font-semibold hidden'>
            <Link href={"/"}>Home</Link>
            <Link href={"#page"}>Page</Link>
            <Link href={"#features"}>Features</Link>
            <Link href={"#how"}>How It Works</Link>
            <Link href={"#screenshots"}>Screenshots</Link>
            <Link href={"#pricing"}>Pricing</Link>
            <Button text={"Download"}/>
        </nav>
        <div className='lg:hidden'><SwipeableTemporaryDrawer/></div>
      </div>
        
    </header>
  )
}
