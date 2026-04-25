import { ABOUT_US_DATA } from '@/utils/helper'
import React from 'react'
import Button from './common/Button'

function AboutUs() {
    return (
        <div className='md:py-30 py-20'>
            <div className='max-w-285 mx-auto max-[1350px]:px-5'>
                <div className='flex lg:flex-row flex-col items-center lg:gap-[98px] max-lg:gap-y-[41px]'>
                    <div>
                        <h2 className='sm:pb-7.5 pb-4 font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black max-lg:text-center'>
                            About <span className='text-green'>Us</span>
                        </h2>
                        <div className='flex flex-col gap-3'>
                            {ABOUT_US_DATA.map((item, i) => (
                                <div key={i} className='p-3.5 border border-green/20 rounded-2xl'>
                                    <span className='pb-1 font-poppins font-semibold sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-black'>{item.title}</span>
                                    <p className='font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='mt-7.5 max-lg:flex max-lg:justify-center'>
                            <Button text={"Know More"} className={"max-sm:text-sm"}/>
                        </div>
                    </div>

                    <img src="/assets/images/webp/about-us.webp" alt="about-image" className='w-full h-full max-w-[533px] max-h-[625.15px]' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs