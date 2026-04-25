import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'

function Upholstery_tips() {
    return (
        <div className='min-md:py-30 pt-[80px] pb-11'>
            <div className='max-w-285 mx-auto max-[1350px]:px-5'>
                <div className='flex lg:flex-row flex-col justify-between max-lg:gap-y-4 pb-12.5'>
                    <h2 className='lg:max-w-[451px] max-[380px]:max-w-[276px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black'>
                        Upholstery Tips, <span className='text-green'>Care & Inspiration</span>
                    </h2>
                    <p className='lg:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark'>
                        Refresh your sofa with the right fabrics, foam, and expert advice plus a breakdown of reupholstery costs in Singapore.
                    </p>
                </div>
                <div className='grid grid-cols-3 max-[1100px]:grid-cols-2 max-sm:grid-cols-1 gap-6'>
                    <img src="/images/webp/upholstery-tips-one.webp" alt="image-one" className='w-full min-[1100px]:max-w-[364px] h-[312px]' />
                    <div className='p-5 bg-offwhite shadow-[0px_4px_25px_rgba(1,1,1,0.10)] rounded-2xl w-full min-[1100px]:max-w-[364px] h-[312px]'>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <span className='pb-1.5 font-inter font-semibold text-xl leading-120 tracking-normal text-black'>Best Upholstery Fabrics 2025</span>
                                <p className='font-poppins font-normal text-lg leading-160 tracking-normal text-gray-dark'>Explore the top trending and durable fabrics for sofas and chairs in 2025.</p>
                            </div>
                            <button className="mt-auto font-poppins font-semibold text-base leading-160 tracking-normal text-green flex items-center gap-1 cursor-pointer">
                                Learn More
                                <span>
                                    <Icons icon={"BTN_ARROW"} />
                                </span>
                            </button>
                        </div>
                    </div>
                    <img src="/images/webp/upholstery-tips-two.webp" alt="image-one" className='w-full min-[1100px]:max-w-[364px] h-[312px]' />
                </div>
                <div className='mt-7.5 flex justify-center  '>
                    <Button text={"Show More"} className={"max-sm:w-full max-sm:justify-center"}/>
                </div>
            </div>
        </div>
    )
}

export default Upholstery_tips