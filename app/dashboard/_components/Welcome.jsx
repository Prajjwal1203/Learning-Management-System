"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Welcome() {
  const {user} = useUser();
  return (
    <div className='p-5 bg-blue-300 w-full text-white rounded-lg flex items-center gap-6'>
      <Image src ={'/images.jpeg'} alt='laptop' width={100} height={100}></Image>
      <div>
        <h2 className='font-bold text-3xl'>Hello,{user?.fullName} </h2>
        <p>Welcome Back , Its Time to get back and start learning.</p>
      </div>
    </div>
  )
}

export default Welcome
