import React from 'react'
// import bgImage from '../assets/bg-image.png'

function HowToBuy() {
    return (
        <div className='z-10 py-[100px] text-center relative' id='how-to-buy'>
            {/* <img src={bgImage} alt="" className='absolute top-10 md:left-[20%] opacity-10 scale-[2] -z-10'/> */}
            <h3 data-aos="zoom-in" className='text-[3rem] text-primary font-stix leading-[120%] mb-4 font-bold text-center'>How To Buy</h3>
            <div className='max-w-[700px] px-2 mx-auto'>
                <article data-aos="slide-up" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4 text-primary'>Step One - Buy and Transfer ETH</h3>
                    <p className='text-base font-poppin leading-[150%]'> Buy Ethereum (ETH) from a centralized exchange such as Binance, Coinbase, Hotbit, Crypto.com, etc. Transfer the ETH from the centralized exchange to a wallet like MetaMask or Trust Wallet.
                    </p>
                </article>
                <article data-aos="slide-up" data-aos-delay="300" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4 text-primary break-words'>Step Two - Connect to Uniswap</h3>
                    <p className='font-poppin word-wrapping'>First click on the Swap Tokens button in the bottom right of your screen. In the top right, press connect wallet.
                    Ensure you are swapping from ETH to $DAWG, if it doesn't autofill, paste the contract: 0xF4B53108401A5e8716348468209f7c33aCbccCc8</p>
                </article>
                <article data-aos="slide-up" data-aos-delay="600" className=''>
                    <h3 className='text-2xl font-semibold my-4 text-primary'>Step Three - Swap ETH to $DAWG</h3>
                    <p className='font-poppin'>Click on the gear in the top right of the Swap box, and set slippage.
                        Simply click swap, confirm on your wallet and you now have $DAWG!.</p>
                </article>
            </div>
        </div>
    )
}

export default HowToBuy
