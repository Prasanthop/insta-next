import React from 'react'
import Link from "next/link"
import Image from 'next/image'

const Header = () => {
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
           <button className='text-sm font-semibold text-blue-500'>Login</button>


        </div>
    </div>
  )
}

export default Header