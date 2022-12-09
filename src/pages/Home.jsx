import React from 'react'
import Header from '../components/Header'
import logo from '../assets/logo.jpg'
import Tokenomics from './Tokenomics'
import HowToBuy from './HowToBuy'
import herobg from '../assets/bg-test.jpg'
import herologo from '../assets/hero-image.png'
import dawg from '../assets/dawg3.png'


function Home() {
    
    return (
        <>
        <div className='hero-bg'>
            <div className="h-screen relative overflow-hidden">
                <div className="container mx-auto">
                    <div className='fixed top-0 left-0 w-full -z-10'>
                        <img src={herobg} alt="" />
                    </div>
                    <Header />
                    <section className='hero-section flex items-center px-2'>
                        <article className='text-center w-full'>
                            <div className='h-[300px] w-[300px]  rounded-full mx-auto overflow-hidden'>
                                <img src={herologo} alt="" className='mx-auto h-full'/>
                            </div>
                            <p data-aos="slide-up" className='text-xl md:text-3xl mb-5 font-poppin'>Let’s bring back the sensation of a good old fashioned banger</p>
                            <div className='' data-aos="fade-in" data-aos-delay="500">
                                <a target="_blank" href="#" class="block mb-4 w-full sm:inline-block sm:w-auto border-2 border-transparent bg-origin-border bg-gradient-to-r from-primary to-primary-dark text-white px-12 py-3 rounded text-lg">Buy $DAWG</a>
                                <a href='#'className='sm:mx-4 block text-white mb-4 w-full sm:inline-block sm:w-auto border-2 hover:bg-white hover:text-black rounded' >
                                    <button className='py-3 px-12  font-semibold text-lg '>Chart</button>
                                </a>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <section className='py-[100px] overflow-hidden bg-black/[0.5] px-2'>
                <div className="container mx-auto">
                    <h3 className='font-stix text-4xl md:text-[50px] mb-6 text-center text-primary font-semibold'>What up DAWG</h3>
                    <div className='flex items-center justify-between flex-col-reverse md:flex-row-reverse '>
                        <article className='text-xl shrink-0 md:w-1/2 pl-4'>
                            <p className='content'>Do you miss the days of up only? Do you miss easy mode? Do you miss barking at the moon?</p>

                            <p className='content'>In my doggy bed, I dream of those days too. But they can be here again, if we all work together.</p>

                            <p className='content'>Let’s bring back the sensation of a good old fashioned banger. The sensation of playing at the park with all our dawg friends to tell them about the next big thing.</p>

                            <p className='content'>Some of you may remember my last project that went to a high nine figure market cap. Some of you remember how much Eth we all made together. How many bones we were able to stack and bury in the backyard.</p>

                            <p className='content'>Sure, those were easier times, I was just a young pup then. But, now, I am wiser, smarter, stronger. And my dawg friends are too. We have the experience, the drive, the tenacity.</p>
                        </article>
                        <div className='md:w-1/2 pr-4'>
                            <img src={dawg} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section id='tokenomics' className='relative bg-bg-image2 mb-[100px] overflow-hidden'>
                <div className="container text-main-color mx-auto py-[100px]  px-2">
                <div className='bg-primary/[0.7] h-[682px] w-[682px] rounded-full absolute blur-[400px] -right-[341px] -top-1/2'></div>
                    <h1 class="font-bold text-4xl mb-4 md:text-[50px] font-stix text-white text-center">Tokenomics</h1>

                    <div className=' gap-4 z-10 p-8 md:py-16 px-8 overflow-hidden text-center'>
                        <div className='mb-6'>
                                    <h4 className='mb-2 text-2xl text-primary'>Contract Address</h4>
                                    <p className='break-normal overflow-hidden'>0xF4B53108401A5e8716348468209f7c33aCbccCc8</p>
                                </div>
                        <div class="flex flex-col mb-6">
                            <h1 class="mt-auto text-2xl mb-2 text-primary">Buy/Sell Tax </h1>
                            <div class="hero-card_text text-lg">4%</div>
                        </div>
                        <article className=''>
                            <div className='mt-auto text-white'>
                                <h5 className='mb-2 text-2xl text-primary'>Total Supply</h5>
                                <p className='text-xl font-medium'>1 Billion</p>
                            </div>
                        </article>
                    </div>
                </div>
          </section>
          <section>
            <div className="mx-auto container">
                <HowToBuy />
            </div>
          </section>
        </div>
        <footer className='bg-[#030303] py-8 text-center'>
            <div className="container mx-auto">
                <nav className='mb-4'>
                    <ul className='flex justify-center md:items-center flex-col md:flex-row'>
                        <a href="https://twitter.com/whatupdawg_up" className='nav'><li>Twtter</li></a>
                        <a href="https://medium.com/@whatsupdawgeth" className='nav'><li>Medium</li></a>
                        <a href='https://t.me/whatupdawgportal' className='nav'><li>Telegram</li></a>
                        <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                        <a href='#how-to-buy' className='nav'><li>How to buy</li></a>
                        <a href='#' className='nav'><li>Buy Now</li></a>
                    </ul>
                </nav>
                <p className='text-center pt-4 text-xs border-t border-t-[0.5px] border-t-white/[0.2]'><i>© COPYRIGHT - DAWG 2022</i></p>
            </div>
        </footer>
        </>
    )
}

export default Home
    