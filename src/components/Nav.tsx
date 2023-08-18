import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'


const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    
    return (     
        <header className="w-full fixed top-0 left-0 sticky z-50 drop-shadow-lg" >
            <nav className="md:flex md:items-center md:justify-between p-1.5 px-4 bg-[#EDE7D7] ">
                <div>
                    <div className='flex justify-between items-center'>
                        {/* LOGO */}
                        <span className='flex-col '>
                            <p className="text-xl font-serif text-center text-[#778773] flex-grow font-semibold " >CAROL</p>
                            <p className="-mt-1.5 text-xs text-center font-serif text-[#778773] flex-grow font-normal ">RENTAL</p> 
                        </span>
                        {/*Search*/}
                        <form className='max-w-[85%] min-w-[50%] relative ml-2'>
                            <div className='relative '>
                                <input type="search" placeholder="Search..." className='w-full px-4 p-1 rounded-full bg-[#D9D6D1] shadow-inner font-serif text-sm'/>
                                <button className='absolute right-0 -transalate-y-1/2 p-1.5 bg-[#C3C0BC] rounded-full ' /*icons */>
                                    <BsSearch className='text-[#6C6B68]'/>
                                </button>
                            </div>   
                        </form>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                            className="p-1 text-[#341F0F] bg-[#778773] rounded-full outline-none focus:bg-[#778773] focus:border"
                            onClick={() => setNavbar(!navbar)}
                            >
                            {navbar ? (
                                <Image src="/close-outline.svg" width={28} height={28} alt="logo" />
                            ) : (
                                <Image
                                    src="/menu-outline.svg"
                                    width={28}
                                    height={28}
                                    alt="logo"
                                    className="focus:border-none active:border-none"
                                />
                            )}
                            </button>
                        </div>       
                    </div>
                </div>
               
                <div className='check'>
                    <div className={` flex-1 justify-self-center pb-1 mt-4 md:block md:pb-0 md:mt-0 ${
                        navbar ? 'p-4 md:p-0 block ' : 'hidden'
                    }`}>
                        <ul className=' transition-all duration-300 md:transition-none bg-[#EDE7D7] fixed md:relative md:flex md:item-center md:pb-0 pb-12 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-4 pr-4'>
                            <li className="py-3 text-xs text-[#341F0F] font-serif py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-[#EEE0B9] border-orange-200  md:hover:text-[#D25656] md:hover:bg-transparent">
                                <Link href="#product" onClick={() => setNavbar(!navbar)}>
                                PRODUCT
                                </Link>
                            </li>
                            <li className="py-3 text-xs text-[#341F0F] font-serif py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-[#EEE0B9] border-orange-200  md:hover:text-[#D25656] md:hover:bg-transparent">
                                <Link href="#about-us" onClick={() => setNavbar(!navbar)}>
                                ABOUT US
                                </Link>
                            </li>
                            <li className="py-3 text-xs text-[#341F0F] font-serif py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-[#EEE0B9] border-orange-200  md:hover:text-[#D25656] md:hover:bg-transparent">
                                <Link href="#HowToRent" onClick={() => setNavbar(!navbar)}>
                                HOW TO RENT
                                </Link>
                            </li>
                            <li className="py-3 text-xs text-[#341F0F] font-serif py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-[#EEE0B9] border-orange-200  md:hover:text-[#D25656] md:hover:bg-transparent">
                                <Link href="#login" onClick={() => setNavbar(!navbar)}>
                                LOGIN
                                </Link>
                            </li>
                        </ul>
                    
                    </div> 
                </div>
     
            </nav>
        </header>
    )
}

export default Nav;