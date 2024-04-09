"use client"
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Link from "next/link"
import Button from './Button';
import { SlMenu } from "react-icons/sl";

export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><SlMenu className='text-2xl font-bold'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='w-[40vw] h-[100vh] bg-[#323232] text-white flex flex-col gap-4 p-6'>
                <Link href={"/"}>Home</Link>
                <Link href={"#page"}>Page</Link>
                <Link href={"#features"}>Features</Link>
                <Link href={"#how"}>How It Works</Link>
                <Link href={"#screenshots"}>Screenshots</Link>
                <Link href={"#pricing"}>Pricing</Link>
                <Button text={"Download"}/>
            </div>
          </Drawer>
    </div>
  );
}
