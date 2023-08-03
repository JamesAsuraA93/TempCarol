import React from 'react'
import {FiMenu} from 'react-icons/fi'

export default function Home(){
    return (
        <header className="bg-[#EDE7D7]" >
            <nav className="md:flex md:items-center md:justify-between p-4 ">
                <div className='flex justify-between items-center'>
                    <div className='flex-col'>
                        <p className="text-2xl font-serif text-center text-[#778773] flex-grow font-semibold " >CAROL</p>
                        <p className="-mt-1.5 text-sm text-center font-serif text-[#778773] flex-grow font-normal ">RENTAL</p> 
                    </div>

                    <span className='text-3xl cursor-pointer md:hidden block'>
                        <FiMenu/>
                    </span>
                </div>

                <ul className="md:flex md:item-center z-[-1] md:z-auto md:static absoloute bg-[#EDE7D7] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
                    p-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='' className='text-sm text-[#341F0F] hover:text-[#D25656] duration-500'>PRODUCT</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] hover:text-[#D25656] duration-500'>ABOUT US</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] hover:text-[#D25656] duration-500'>HOW TO RENT</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] hover:text-[#D25656] duration-500'>LOGIN</a>
                    </li>
                </ul>
                
                
            </nav>
        </header>
    )
}