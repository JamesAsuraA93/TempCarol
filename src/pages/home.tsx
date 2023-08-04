import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'

const Home = () => {
    let [open, setOpen] = useState(false);
    return (     
        <header className="w-full fixed top-0 left-0 " >
            <nav className="md:flex md:items-center md:justify-between p-2 px-4 bg-[#EDE7D7]">
                <div className='flex justify-between items-center'>
                    <span className='flex-col'>
                        <p className="text-2xl font-serif text-center text-[#778773] flex-grow font-semibold " >CAROL</p>
                        <p className="-mt-1.5 text-sm text-center font-serif text-[#778773] flex-grow font-normal ">RENTAL</p> 
                    </span> 
                    <span className='text-3xl cursor-pointer md:hidden block '>
                        <FiMenu/>
                    </span>       
                </div>
                
    

                <ul className="md:flex md:item-center -mr-4 md:pb-0 pb-12 absolute md:static bg-[#EDE7D7] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in">
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='' className='text-sm text-[#341F0F] font-serif hover:text-[#D25656] duration-300'>PRODUCT</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] font-serif hover:text-[#D25656] duration-300'>ABOUT US</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] font-serif hover:text-[#D25656] duration-300'>HOW TO RENT</a>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <a href='#' className='text-sm text-[#341F0F] font-serif hover:text-[#D25656] duration-300'>LOGIN</a>
                    </li>
                </ul>
                
                
            </nav>
        </header>
    )
}

export default Home;