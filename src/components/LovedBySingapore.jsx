"use client"
import React, { useRef } from 'react'
import Icons from './common/Icons'
import { LOVED_SINGAPORE_DATA } from '@/utils/helper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function LovedBySingapore() {

    const swiperRef = useRef(null)

    return (
        <div className='py-20 md:py-30 '>
            <div className='overflow-hidden w-full mx-auto   relative'>

                {/* Heading */}
                <div className='max-w-285 max-[1350px]:px-5 mx-auto pb-12.5'>
                    <div className='flex lg:flex-row flex-col max-lg:gap-y-3.75 justify-between max-lg:text-center'>
                        <h2 className=' lg:max-w-[553px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] am:leading-120 leading-130 tracking-normal text-black'>
                            Loved by Singapore <span className='text-green'>Homes & Businesses</span>
                        </h2>
                        <p className='lg:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark'>
                            Over 100 five star reviews from customers who transformed their sofas, chairs, and spaces with DKS Upholstery.
                        </p>
                    </div>
                </div>

                {/* LEFT ARROW */}
                <button
                                     onClick={() => swiperRef.current.swiper.slidePrev()}
                                     className="absolute max-sm:hidden  left-[40px] top-[66%] -translate-y-1/2 z-50 rotate-180 cursor-pointer group w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
                                 >
                                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                                 </button>

                                 {/* CUSTOM RIGHT ARROW */}
                                 <button
                                     onClick={() => swiperRef.current.swiper.slideNext()}
                                     className="absolute max-sm:hidden right-[40px] top-[66%] -translate-y-1/2 z-50 group cursor-pointer w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
                                 >
                                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                                 </button>

                {/* SLIDER */}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    navigation={false}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination"
                    }}
                    breakpoints={{
                        0: {
                            spaceBetween: 16,   // sm se niche
                        },
                        640: {
                            spaceBetween: 32,   // sm and above
                        }
                    }}

                    className="loved-slider"
                >
                    {LOVED_SINGAPORE_DATA.map((card, i) => (
                        <SwiperSlide key={i} className='sm:w-125! w-75! z-5'>

                            <div className='slider-card sm:p-10 p-6  border rounded-2xl sm:h-[353px] h-[327px] relative'>
                                <div className='flex flex-col sm:gap-6'>
                                    <Icons icon={"QUOTE"} />

                                    <p className='max-sm:pt-5 max-sm:pb-6 font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark'>
                                        {card.paragraph}
                                    </p>

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h3 className='font-poppins font-semibold text-2xl leading-130 tracking-normal text-black'>
                                                {card.name}
                                            </h3>
                                            <p className='font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-black/70'>
                                                {card.description}
                                            </p>
                                        </div>

                                        <img src={card.img} alt="profile-image" />
                                    </div>
                                </div>

                                <div className='flex items-center w-fit sm:mt-[70px] mt-[68px]'>
                                    <img src="/assets/images/webp/google-image.webp" alt="google-image" className='w-6 h-6' />
                                    <Icons icon={"STARS"} className={"w-[116px] h-5"} />
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* PAGINATION DOTS */}
                <div className="custom-pagination"></div>

            </div>
        </div>
    )
}

export default LovedBySingapore








// "use client"
// import React, { useRef } from 'react'
// import Icons from './common/Icons'
// import { LOVED_SINGAPORE_DATA } from '@/utils/helper'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'


// function LovedBySingapore() {
//       const swiperRef = useRef(null)
//     return (
//         <div className='py-30'>
//             <div className='overflow-hidden w-full mx-auto max-[1350px]:px-4 relative'>

//                 <div className='max-w-285 mx-auto pb-12.5'>
//                     <div className='flex flex-row justify-between'>
//                         <h2 className='max-w-[553px] font-poppins font-semibold text-5xl leading-120 tracking-normal text-black'>
//                             Loved by Singapore <span className='text-green'>Homes & Businesses</span>
//                         </h2>
//                         <p className='max-w-[427px] font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark'>
//                             Over 100 five star reviews from customers who transformed their sofas, chairs, and spaces with DKS Upholstery.
//                         </p>
//                     </div>
//                 </div>

//                 <button
//                     onClick={() => swiperRef.current.swiper.slidePrev()}
//                     className="absolute  left-[40px] top-[66%] -translate-y-1/2 z-50 rotate-180 cursor-pointer group w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* CUSTOM RIGHT ARROW */}
//                 <button
//                     onClick={() => swiperRef.current.swiper.slideNext()}
//                     className="absolute right-[40px] top-[66%] -translate-y-1/2 z-50 group cursor-pointer w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* Slider */}
//                 <Swiper
//                     ref={swiperRef}
//                     modules={[Navigation, Pagination]}
//                     spaceBetween={32}
//                     slidesPerView={"auto"}
//                     centeredSlides={true}
//                     loop={true}
//                     grabCursor={true}
//                     navigation={false}
//                     pagination={{
//                         clickable: true,
//                         el: ".custom-pagination" // 👈 custom dots container
//                     }}
//                 >
//                     {LOVED_SINGAPORE_DATA.map((card, i) => (
//                         <SwiperSlide key={i} className='!w-[500px] z-5'>

//                             <div className='p-10 bg-offwhite border border-black/16 rounded-2xl h-[353px] relative'>

//                                 <div className='flex flex-col gap-6'>
//                                     <Icons icon={"QUOTE"} />

//                                     <p className='font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark'>
//                                         {card.paragraph}
//                                     </p>

//                                     <div className='flex items-center justify-between'>
//                                         <div>
//                                             <h3 className='font-poppins font-semibold text-2xl leading-130 tracking-normal text-black'>
//                                                 {card.name}
//                                             </h3>
//                                             <p className='font-poppins font-normal text-base leading-160 tracking-normal text-black/70'>
//                                                 {card.description}
//                                             </p>
//                                         </div>
//                                         <img src={card.img} alt="profile-image" />
//                                     </div>
//                                 </div>

//                                 <div className='flex items-center w-fit mt-[70.94px]'>
//                                     <img src="/images/webp/google-image.webp" alt="google-image" className='w-6 h-6 ' />
//                                     <Icons icon={"STARS"} className={"w-[116px] h-5 "} />
//                                 </div>

//                             </div>

//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* 👇 Pagination dots container */}
//                 <div className="custom-pagination"></div>

//             </div>
//         </div>
//     )
// }

// export default LovedBySingapore




 