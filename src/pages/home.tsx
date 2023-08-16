import React, { useState } from 'react';
import { data } from '@/data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const Home = () => {
    {/*Banner */}
    const slides =[
        {
            url: 'https://img.freepik.com/free-photo/modern-pretty-girl-beige-coat-standing-near-building-outdoor-glamorous-sunglasses-her-face-makeup-stylish-tail-hairstyle-hand-near-face-lot-summer-light-last-warm-days_343629-69.jpg?w=2000&t=st=1691566681~exp=1691567281~hmac=e5761228855045816837b839d89aba2e5178ec4bb3fafb7ffa0fc443d25fcb4e',
        },
        {
            url: 'https://img.freepik.com/free-photo/rack-clothes-store_23-2148929537.jpg?w=1800&t=st=1691609695~exp=1691610295~hmac=16d672842feb2ee3c129fe32c302e1a4a8b77bb1e45edfff7a84f69ad7f909fd',
        },
        {
            url: 'https://img.freepik.com/free-photo/fashionable-model-stylish-hat-red-coat-boots-posing-white-wall-studio_273443-4646.jpg?w=1800&t=st=1691609800~exp=1691610400~hmac=ebd328835c572c75d2ab58e2f9b4487c660b8098e76dd22e12250d572a62283d',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      {/*Hot item*/}
      
    
     

    
    return ( 
        <div className='bg-[#EDE7D7] '>
            {/*Banner */}
            <div className='w-full left-0 right-0'>
                <div className='max-w-[1400px] h-[250px] w-full m-auto relative group '>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full bg-center bg-cover duration-500'>
                    </div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Rightt Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>   
                </div>
            </div>
            {/*Hot item*/}
            <div className='px-4 py-6 bg-pink-200'>
                <p className='text-2xl font-serif text-[#BD5858] flex-grow'>Hot Item!</p>
                
                <>
                    <div className='relative flex items-center w-[720px] justify-center'>
                        <div id="slide" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                            {data.map((item) => (
                                <img
                                    className='w-[180px] h-[200px] inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300 '
                                    src={item.img}
                                    alt='/'
                                />
                            ))}
                            
                        </div>
    
                    </div>
                </>




            </div>

    

            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>
            <h2>hhh</h2>


        
        </div>    
    ) 
      
}

export default Home;