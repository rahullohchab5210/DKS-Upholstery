import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'
import FreeQuote from './FreeQuote'

function Hero() {
    return (
        <div className="bg-[url('/assets/images/webp/hero-bg.webp')] bg-cover bg-center bg-no-repeat w-full h-full">
            <div className='max-w-285 mx-auto max-[1350px]:px-5'>
                <div className='flex lg:flex-row flex-col  max-lg:gap-y-[89px] items-center justify-between pt-25.75  md:pb-[148.01px] pb-[73px]'>
                    <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                        <div>
                            <span className='font-inter sm:text-base text-sm font-medium sm:leading-120 leading-150 tracking-normal text-black'>Highly Rated on Google</span>
                            <div className='flex items-center sm:gap-3 gap-2.75 pt-1.5 max-sm:w-[141px] max-sm:h-5.5'>
                                <img src="/assets/images/webp/google-image.webp" alt="google-image" />
                                <Icons icon={"STARS"} />
                            </div>
                        </div>
                        <div className='max-w-[431px] md:pt-4 pt-8 md:pb-7.5 pb-5 max-lg:text-center'>
                            <h1 className='font-poppins font-semibold lg:text-5xl md:text-4xl text-body leading-120 tracking-normal text-green'>Upholstery Services <span className='text-black'>Trusted Across Singapore</span></h1>
                            <p className='max-w-[429px] md:pt-4 pt-2.5 font-poppins font-normal sm:text-base text-sm sm:leading-162 leading-150 tracking-normal text-gray-dark'>Complete upholstery solutions for homes and businesses sofas, cushions, built ins, headboards, and more.</p>
                        </div>
                        <Button
                            icon={<Icons icon={"WHATSAPP"} />}
                            text={"WhatsApp Us Now"}
                        />
                    </div>
                    <div>
                        <img src="/assets/images/webp/hero-sofa.webp" alt="sofa-images" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero