import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
   <header className='flex   justify-around  m-5  rounded-full bg-yellow-500 p-1 '>
     <div className="text-1xl font-bold justify-center text-white  items-center border rounded-full text-center m-2 p-3 hover:bg-white hover:text-yellow-500 	outline: 2px solid transparent ">
        Faheem Saif 
     </div>
     <div className="flex  justify-center items-center " >
        <input className='rounded-full w-96   p-2 focus:border-  placeholder-yellow-400   placeholder:text-sm bg-slate-100	' type="text"  placeholder='You can ... '/>
     </div>

     <nav className='flex justify-center items-center  text-white    font-semibold gap-4 m-
     '>
       
            <ul  className='hover:text-white border-b-4 border-purple-600 p-1  '> 
            <Link legacyBehavior href={"#"}><a>Home</a></Link>
            </ul>
            <ul  className='hover:text-white'>
            <Link legacyBehavior href={"#"}><a>Services</a></Link >
            </ul>
            <ul className='hover:text-white'>
            <Link legacyBehavior href={"#"}><a>Pricing</a></Link>
            </ul>
            <ul className='hover:text-white'>
            <Link legacyBehavior href={"#"}><a>About </a></Link>
            </ul>
            <ul className='hover:text-white'>
            <Link legacyBehavior href={"#"}><a>Contact Us</a></Link>
            </ul>
        
           
        
     </nav>
   </header>
  )
}
