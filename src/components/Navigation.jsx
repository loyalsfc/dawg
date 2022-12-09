import React from 'react'

function Navigation({dnone}) {
  Navigation.defaultProps = {
    dnone: 'md:inline-block'
  }

  function hideMobileMenu(){
    document.querySelector('.menu').classList.add('hidden')
  }

  return (
            <ul className='font-medium text-white/[0.8] flex items-start justify-center mt-12 md:mt-0 flex-col md:block'>
                <li onClick={hideMobileMenu} className='cursor-pointer my-6 md:my-0 md:inline-block mx-9 md:mx-3 lg:mx-8 md:first:ml-0 hover:text-main-color  last:mr-0'>Home</li>
                <li onClick={hideMobileMenu} className='cursor-pointer my-6 md:my-0 md:inline-block mx-9 md:mx-3 lg:mx-8 md:first:ml-0 hover:text-main-color last:mr-0'><a href="#about">About us</a></li>
                <li onClick={hideMobileMenu} className='cursor-pointer my-6 md:my-0 md:inline-block mx-9 md:mx-3 lg:mx-8 md:first:ml-0 hover:text-main-color last:mr-0'><a href="#utility">Why MemeStreet</a></li>
                <li onClick={hideMobileMenu} className='cursor-pointer my-6 md:my-0 md:inline-block mx-9 md:mx-3 lg:mx-8 md:first:ml-0 hover:text-main-color last:mr-0'><a href="#tokenomics">Tokenomics</a></li>
                <li onClick={hideMobileMenu} className='cursor-pointer my-6 md:my-0 md:inline-block mx-9 md:mx-3 lg:mx-8 md:first:ml-0 hover:text-main-color last:mr-0'><a href="#roadmap">Roadmap</a></li>
                <li onClick={hideMobileMenu} className={'cursor-pointer my-6 md:my-0 ' + dnone + ' mx-9 md:mx-3 lg:mx-8 md:first:ml-0 last:mr-0 rounded-full w-fit bg-main-color text-[#121212] px-8 md:px-6 lg:px-8 py-3 hover:opacity-75'}>Buy now</li>
            </ul>
  )
}

export default Navigation
