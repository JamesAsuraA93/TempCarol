import React from 'react'


export default function Home(){
    return (
      <header className="bg-[#EDE7D7] " >
          <nav className="mx-4 navbar navbar-expand-md container mx-auto flex p-1 items-center max-w-screen-2xl" /* breakpoints*/> 
            <div className='flex-col '>
              <a className="navbar-brand" href="">
                <p className="text-2xl font-serif text-center text-[#778773] flex-grow font-semibold " >CAROL</p>
                <p className="-mt-1.5 text-sm text-center font-serif text-[#778773] flex-grow font-normal ">RENTAL</p>
              </a> 
            </div>


            <div className="topnav a">
              <input type="text" placeholder="Search..."/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#341f0fa2" className="bi bi-search fixed-icon md:flex items-center" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>

              
          </nav>
      </header>  
    )
}
