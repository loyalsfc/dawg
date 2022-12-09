import React from 'react'
import logo from '../assets/hero-image.png'

function Header() {
    function toggleMobileNav(){
        document.querySelector('.mobile-menu').classList.toggle('height-0')
    }

  return (
    <>
        <div className='mobile-menu fixed top-0 left-0 w-full h-screen flex flex-col md:flex-row md:items-center justify-center z-10 bg-black height-0 transition-all overflow-hidden '>
            <i class="fa-solid fa-xmark absolute right-4 top-4 text-white text-xl" onClick={toggleMobileNav}></i>
            <NavItems />
        </div>
        <header className='flex items-center justify-between py-6 px-6 position-sticky top-0'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='h-12 mr-4 rounded-lg' />
                <span className='text-2xl font-stix'>DAWG</span>
            </div>
            <nav className='hidden lg:block'>
                <ul className='flex md:items-center flex-col md:flex-row'>
                    <a href="https://twitter.com/whatupdawg_up" className='nav'><li>Twtter</li></a>
                    <a href="https://medium.com/@whatsupdawgeth" className='nav'><li>Medium</li></a>
                    <a href='https://t.me/whatupdawgportal' className='nav'><li>Telegram</li></a>
                    <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                    <a href='#how-to-buy' className='nav'><li>How to buy</li></a>
                </ul>
            </nav>
            <a className='mx-10 md:mx-0 hidden lg:block' href='#'>
                <button className='btn-outline rounded-xl'>Buy $DAWG</button>
            </a>
            <i className="fa-solid fa-bars lg:hidden text-xl" onClick={toggleMobileNav}></i>
        </header>
    </>
  )
}

function NavItems(){
    return(
        <>
            <nav className=''>
                <ul className='flex md:items-center flex-col md:flex-row'>
                <a href="https://twitter.com/whatupdawg_up" className='nav'><li>Twtter</li></a>
                    <a href="https://medium.com/@whatsupdawgeth" className='nav'><li>Medium</li></a>
                    <a href='https://t.me/whatupdawgportal' className='nav'><li>Telegram</li></a>
                    <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                    <a href='#how-to-buy' className='nav mb-4'><li>How to buy</li></a>
                </ul>
            </nav>
            <a className='mx-10 md:mx-0' href='#'>
                <button className='btn-outline'>Buy $DAWG</button>
            </a>
        </>
    )
}

export default Header
