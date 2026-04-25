"use client"
import React, { useRef } from "react"
import Icons from "./common/Icons"
import { TRANSFORMATIONS_DATA } from "@/utils/helper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

function Transformations() {
    const swiperRef = useRef(null)

    return (
        <div className="md:py-30 py-12.5 bg-[url('/assets/images/webp/transformations-bg.webp')] bg-cover bg-center bg-no-repeat w-ful">
            <div className="max-w-285 mx-auto max-[1350px]:px-8 relative">

                {/* Heading */}
                <div className="flex lg:flex-row flex-col max-lg:gap-y-4.25 justify-between sm:pb-12.5 pb-10 max-lg:px-2.75">
                    <h2 className="lg:max-w-[549px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black">
                        Real Transformations,
                        <span className="text-green"> Real Customers</span>
                    </h2>
                    <p className="lg:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark">
                        Every project tells a story see what other customers say about their sofas, chairs, and spaces after working with DKS Upholstery.
                    </p>
                </div>

                {/* LEFT ARROW - Only Desktop */}
                <button
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="absolute left-[-84px] max-[1340px]:left-4 top-[351px] -translate-y-1/2 z-50 rotate-180 cursor-pointer group 
                    w-14 h-14 border border-green rounded-full items-center justify-center hover:bg-green transition-all duration-300 
                    hidden lg:flex"
                >
                    <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                </button>

                {/* RIGHT ARROW - Only Desktop */}
                <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="absolute right-[-84px] max-[1340px]:right-4 top-[351px] -translate-y-1/2 z-50 cursor-pointer group 
                    w-14 h-14 border border-green rounded-full items-center justify-center hover:bg-green transition-all duration-300 
                    hidden lg:flex"
                >
                    <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                </button>

                {/* SLIDER */}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={true}
                    grabCursor={true}
                    navigation={false}
                >
                    {TRANSFORMATIONS_DATA.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex lg:flex-row flex-col items-center lg:gap-[96px] max-lg:gap-y-8 max-lg:mb-15">

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt="transformation-image"
                                    className="w-full lg:max-w-[616px] lg:max-h-[381px] rounded-2xl"
                                />

                                {/* Content */}
                                <div>
                                    <Icons icon={"QUOTE_TWO"} className={"mb-7.5"} />

                                    <span className="font-poppins font-bold sm:text-xl text-[22px] sm:leading-150 leading-130 tracking-normal text-black">
                                        {item.title}
                                    </span>

                                    <p className="pt-1.25 font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-2.5 mt-3.75">
                                        <div className="w-11.5 h-11.5 flex items-center justify-center rounded-full bg-offwhite">
                                            <img
                                                src="/assets/images/webp/google-image.webp"
                                                alt="google-image"
                                                className="w-10 h-10"
                                            />
                                        </div>

                                        <span className="font-poppins font-semibold sm:text-base text-lg leading-160 tracking-normal text-gray-dark">
                                            {item.name}.
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* MOBILE & TABLET BOTTOM ARROWS */}
                <div className="flex lg:hidden justify-center gap-6 z-50">
                    <button
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                        className=" -translate-y-1/2 z-50 rotate-180 cursor-pointer group 
                    w-14 h-14 border border-green rounded-full flex items-center justify-center hover:bg-green transition-all duration-300 
         "
                    >
                        <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                    </button>
                    <button
                        onClick={() => swiperRef.current.swiper.slideNext()}
                        className="  -translate-y-1/2 z-50 cursor-pointer group 
                    w-14 h-14 border border-green rounded-full flex items-center justify-center hover:bg-green transition-all duration-300 
                    "
                    >
                        <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
                    </button>
                   
                </div>

            </div>
        </div>
    )
}

export default Transformations











// "use client"
// import React, { useRef } from "react"
// import Icons from "./common/Icons"
// import { TRANSFORMATIONS_DATA } from "@/utils/helper"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"

// function Transformations() {
//     const swiperRef = useRef(null)

//     return (
//         <div className="md:py-30 py-12.5 bg-[url('/images/webp/transformations-bg.webp')] bg-cover bg-center bg-no-repeat w-ful">
//             <div className="max-w-285 mx-auto max-[1350px]:px-5 relative">

//                 {/* Heading */}
//                 <div className="flex flex-row justify-between pb-12.5">
//                     <h2 className="max-w-[549px] font-poppins font-semibold text-5xl leading-120 tracking-normal text-black">
//                         Real Transformations,<span className="text-green"> Real Customers</span>
//                     </h2>
//                     <p className="max-w-[427px] font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark">
//                         Every project tells a story see what other customers say about their sofas, chairs, and spaces after working with DKS Upholstery.
//                     </p>
//                 </div>

//                 {/* LEFT ARROW */}
//                 <button
//                     onClick={() => swiperRef.current.swiper.slidePrev()}
//                     className="absolute left-[-84px] max-[1340px]:left-4 top-[351px] -translate-y-1/2 z-50 rotate-180 cursor-pointer group w-14 h-14 border border-green rounded-full flex items-center justify-center hover:bg-green transition-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* RIGHT ARROW */}
//                 <button
//                     onClick={() => swiperRef.current.swiper.slideNext()}
//                     className="absolute right-[-84px] max-[1340px]:right-4 top-[351px] -translate-y-1/2 z-50 cursor-pointer group w-14 h-14 border border-green rounded-full flex items-center justify-center hover:bg-green transition-all duration-300"
//                 >
//                     <Icons icon={"SLIDER_ARROW"} pathClass={"fill-green group-hover:fill-white"} />
//                 </button>

//                 {/* SLIDER */}
//                 <Swiper
//                     ref={swiperRef}
//                     modules={[Navigation]}
//                     spaceBetween={40}
//                     slidesPerView={1}
//                     loop={true}
//                     grabCursor={true}
//                     navigation={false}
//                 >
//                     {TRANSFORMATIONS_DATA.map((item, i) => (
//                         <SwiperSlide key={i}>
//                             <div className="flex lg:flex-row flex-col items-center lg:gap-[96px] max-lg:gap-y-8">
//                                 {/* Image */}
//                                 <img
//                                     src={item.img}
//                                     alt="transformation-image"
//                                     className="w-full lg:max-w-[616px] lg:max-h-[381px] rounded-2xl"
//                                 />

//                                 {/* Content */}
//                                 <div>
//                                     <Icons icon={"QUOTE_TWO"} className={"mb-7.5"} />

//                                     <span className="font-poppins font-bold text-xl leading-150 tracking-normal text-black">
//                                         {item.title}
//                                     </span>

//                                     <p className="pt-1.25 font-poppins font-normal text-base leading-160 tracking-normal text-gray-dark">
//                                         {item.description}
//                                     </p>

//                                     <div className="flex items-center gap-2.5 mt-3.75">
//                                         <div className="w-11.5 h-11.5 flex items-center justify-center rounded-full bg-offwhite">
//                                             <img
//                                                 src="/images/webp/google-image.webp"
//                                                 alt="google-image"
//                                                 className="w-10 h-10"
//                                             />
//                                         </div>

//                                         <span className="font-poppins font-semibold text-base leading-160 tracking-normal text-gray-dark">
//                                             {item.name}.
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </div>
//         </div>
//     )
// }

// export default Transformations










 