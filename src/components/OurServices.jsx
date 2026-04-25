"use client"
import React, { useRef } from "react"
import Icons from "./common/Icons"
import { OUR_SERVICES_DATA } from "@/utils/helper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import Button from "./common/Button"

const OurServices = () => {
    const swiperRef = useRef(null)

    return (
        <div className="md:py-30 pt-20 pb-12.5">
            <div className="max-w-285 mx-auto max-[1350px]:px-5 relative">

                {/* Heading (as you said, not touching) */}
                <div className="flex flex-row justify-between pb-12.5 max-md:flex-col max-md:gap-4 max-md:text-center">
                    <h2 className="md:max-w-[461px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black">
                        Pick from <br /> <span className="text-green">Our Services</span>
                    </h2>

                    <p className="md:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark">
                        From worn out fabrics to flawless finishes, our expert craftsmanship turns tired furniture into pieces you’ll be proud to showcase.
                    </p>
                </div>

                {/* LEFT ARROW */}
                <button
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="
                        absolute  max-sm:hidden 
                        -left-[84px] 
                        max-[1325px]:left-2 
                        top-[66%] 
                        -translate-y-1/2 
                        z-50 rotate-180 
                        cursor-pointer group 
                        w-15 h-15 border-[0.75px] border-green rounded-full 
                        flex items-center justify-center hover:bg-green transiton-all duration-300
                        max-[640px]:top-full max-[640px]:left-[35%]
                    "
                >
                    <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="
                        absolute max-sm:hidden
                        -right-[84px] 
                        max-[1325px]:right-2 
                        top-[66%] 
                        -translate-y-1/2 
                        z-50 group 
                        cursor-pointer w-15 h-15 border-[0.75px] border-green rounded-full 
                        flex items-center justify-center hover:bg-green transiton-all duration-300
                        max-[640px]:top-full max-[640px]:right-[35%]
                    "
                >
                    <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                </button>

                {/* Slider */}
                <div className="max-sm:hidden"> 
                <Swiper
                    
                    ref={swiperRef}
                    modules={[Navigation]}
                    loop={true}
                    grabCursor={true}
                    navigation={false}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 1.4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {OUR_SERVICES_DATA.map((card, i) => (
                        <SwiperSlide key={i} className="min-lg:!w-[364px] w-full">
                            <div className="p-5 flex flex-col justify-between hover:shadow-[0px_4px_25px_rgba(1,1,1,0.10)] border border-green/20 rounded-2xl transition-all duration-300 group min-h-[321px]">
                                <div>
                                    <Icons icon={card.icon} />
                                    <h6 className="pt-4 pb-3 font-inter font-semibold text-2xl leading-130 tracking-normal text-black">
                                        {card.title}
                                    </h6>
                                    <p className="font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark group-hover:text-black">
                                        {card.description}
                                    </p>
                                </div>

                                <button className="mt-auto font-poppins font-semibold text-base leading-160 tracking-normal text-green flex items-center gap-1 cursor-pointer">
                                    Learn More
                                    <span>
                                        <Icons icon={"BTN_ARROW"} />
                                    </span>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
                <div className="sm:hidden">
                    <div className="flex flex-col gap-5">
                        {OUR_SERVICES_DATA.slice(0, 4).map((card, i) => (
                            <div key={i} className="p-5 flex flex-col justify-between hover:shadow-[0px_4px_25px_rgba(1,1,1,0.10)] border border-green/20 rounded-2xl transition-all duration-300 group min-h-[313px]">
                                <div>
                                    <Icons icon={card.icon} />
                                    <h6 className="pt-4 pb-3 font-inter font-semibold text-[22px] leading-130 tracking-normal text-black">
                                        {card.title}
                                    </h6>
                                    <p className="font-poppins font-normal text-sm leading-150 tracking-normal text-gray-dark group-hover:text-black">
                                        {card.description}
                                    </p>
                                </div>

                                <button className="mt-auto font-poppins font-semibold text-base leading-160 tracking-normal text-green flex items-center gap-1 cursor-pointer">
                                    Learn More
                                    <span>
                                        <Icons icon={"BTN_ARROW"} />
                                    </span>
                                </button>
                            </div>
                        ))}
</div>
                </div>

                <div className="flex justify-center mt-7.5">
                    <Button text={"View All Services"} />
                </div>
            </div>
        </div>
    )
}

export default OurServices






// "use client"
// import React, { useRef } from "react"
// import Icons from "./common/Icons"
// import { OUR_SERVICES_DATA } from "@/utils/helper"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"
// import Button from "./common/Button"

// const OurServices = () => {
//     const swiperRef = useRef(null)

//     return (
//         <div className="py-30">
//             <div className="max-w-285 mx-auto max-[1350px]:px-3 relative">

//                 {/* Heading */}
//                 <div className="flex flex-row justify-between pb-12.5">
//                     <h2 className="max-w-[461px] font-poppins font-semibold text-5xl leading-120 tracking-normal text-black">
//                         Pick from <br /> <span className="text-green">Our Services</span>
//                     </h2>
//                     <p className="max-w-[427px] font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark">
//                         From worn out fabrics to flawless finishes, our expert craftsmanship turns tired furniture into pieces you’ll be proud to showcase.
//                     </p>
//                 </div>

//                 {/* LEFT ARROW */}
//                 <button
//                     onClick={() => swiperRef.current.swiper.slidePrev()}
//                     className="absolute  -left-[84px] max-[1325px]:left-2 top-[66%] -translate-y-1/2 z-50 rotate-180 cursor-pointer group w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* CUSTOM RIGHT ARROW */}
//                 <button
//                     onClick={() => swiperRef.current.swiper.slideNext()}
//                     className="absolute -right-[84px] max-[1325px]:right-2 top-[66%] -translate-y-1/2 z-50 group cursor-pointer w-15 h-15 border-[0.75px] border-green rounded-full flex items-center justify-center hover:bg-green transiton-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* Slider */}
//                 <Swiper
//                     ref={swiperRef}
//                     modules={[Navigation]}
//                     spaceBetween={24}
//                     slidesPerView={3}
//                     loop={true}
//                     grabCursor={true}
//                     navigation={false}
//                 >
//                     {OUR_SERVICES_DATA.map((card, i) => (
//                         <SwiperSlide key={i} className="!w-[364px]">
//                             <div className="p-5 flex flex-col justify-between hover:shadow-[0px_4px_25px_rgba(1,1,1,0.10)] border border-green/20 rounded-2xl transition-all duration-300 group min-h-[321px]">
//                                 <div>
//                                     <Icons icon={card.icon} />
//                                     <h6 className="pt-4 pb-3 font-inter font-semibold text-2xl leading-130 tracking-normal text-black">
//                                         {card.title}
//                                     </h6>
//                                     <p className="font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark group-hover:text-black">
//                                         {card.description}
//                                     </p>
//                                 </div>

//                                 <button className="mt-auto font-poppins font-semibold text-base leading-160 tracking-normal text-green flex items-center gap-1 cursor-pointer">
//                                     Learn More
//                                     <span>
//                                         <Icons icon={"BTN_ARROW"} />
//                                     </span>
//                                 </button>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <div className="flex justify-center mt-7.5">
//                     <Button text={"View All Services"} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurServices



 