"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import {signIn, useSession, signOut} from 'next-auth/react'
import Modal from "react-modal"
import { IoAddCircleOutline } from "react-icons/io5";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const{data: session} = useSession()
  const[isOpen, setIsOpen] = useState(false)
  console.log(session)
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            {/* logo */}
             <Link href="/" className='hidden lg:inline-flex'>
                <Image 
                src="/Instatrans.webp"
                width={96} height={96}
                
                />
            </Link>   
             <Link href="/" className='lg:hidden '>
                <Image 
                src="/logo.webp"
                width={40} height={40}
                
                />
            </Link>   

            {/* search input */}
            <input type="text" placeholder='Search' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'/>


            {/* menue items */}   
              {
                session?(
                <div className='flex gap-2 items-center'>
                    <IoAddCircleOutline className='text-2xl cursor-pointer transform hover:scale-125 transition duration-200'
                      onClick={()=>setIsOpen(true)}
                    />
                    <img src={session.user.image} className='rounded-full h-10 w-10 cursor-pointer ' onClick={signOut}/>
                </div>
              
              
              ) : (
                  <button onClick={()=>signIn()} className='text-sm font-semibold text-blue-500'>Login</button>
                )
              }         
           


        </div>
        {
          isOpen && (
            <Modal isOpen={isOpen} className='max-w-lg absolute w-[90%] p-6 top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md'
              onRequestClose={()=>setIsOpen(false)}
              ariaHideApp={false}
            
            
            >
              <div className='flex flex-col justify-center items-center h-[100%]'>
                <HiCamera className='text-5xl text-gray-400 cursor-pointer'/>                
              </div>
              <input type="text" maxLength={150} placeholder='Please enter your caption' className='m-4 border-none text-center w-full focus-ring-0 outline-none'/>
              <button disabled className='w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disbled:cursor-not-allowed brightness-[100%]'>Upload Post</button>
              <AiOutlineClose className='cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300'
                onClick={()=>setIsOpen(false)}
              
              />
            </Modal>
          )
        }
    </div>
  )
}

export default Header