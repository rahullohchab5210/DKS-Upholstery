"use client"
import React, { useRef } from "react"
import { BEFORE_AFTER_DATA, BEFORE_SM_DATA, BEFORE_sm_DATA } from "@/utils/helper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import Icons from "./common/Icons"
import Button from "./common/Button"

const BeforeAfter = () => {
  const swiperRef = useRef(null)

  return (
    <div className="md:pt-30 pt-12.5">
      <div className="max-w-285 mx-auto pb-12.5 relative overflow-visible">

        {/* Heading */}
        <div className="flex md:flex-row flex-col max-md:gap-y-4 max-md:text-center max-md:justify-center max-md:items-center justify-between pb-12.5 max-[1350px]:px-5">
          <h2 className="md:max-w-[436px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black">
            Before & After: <span className="text-green text-nowrap">See the Difference</span>
          </h2>
          <p className="md:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark">
            From worn out sofas to sleek wall panels, nothing shows our work better than a side by side transformation. Slide to see the difference for yourself.
          </p>
        </div>

        {/* CUSTOM LEFT ARROW */}
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="absolute max-sm:hidden left-[-34px] max-[1220px]:left-0 top-[55%] -translate-y-1/2 z-50 rotate-180 cursor-pointer group opacity-70 hover:opacity-100"
        >
          <Icons icon={"SLIDER_ARROW"} pathClass={"fill-black group-hover:fill-green"} />
        </button>

        {/* CUSTOM RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="absolute max-sm:hidden right-[-34px] max-[1220px]:right-0 top-[55%] -translate-y-1/2 z-50 group opacity-70 hover:opacity-100 cursor-pointer"
        >
          <Icons icon={"SLIDER_ARROW"} pathClass={"fill-black group-hover:fill-green"} />
        </button>

        {/* Swiper */}
        <div className="max-sm:hidden"> 
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          grabCursor={true}
          loop={true}
          navigation={false}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            }
          }}
          className="before-after-swiper"
        >
          {BEFORE_AFTER_DATA.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl overflow-hidden border border-black/10">
                <img
                  src={item.img}
                  alt="before-after"
                  className="w-full h-[260px] sm:h-[300px] md:h-[339px]  "
                />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center gap-5 sm:hidden w-full">
          {BEFORE_SM_DATA.map((item, i) => ( 
            <div key={i}>
              <img src={item.img} alt="image" className="w-full h-full max-h-[242px]  "/>
            </div>
  ))}
        </div>

        <div className="mt-7.5 flex justify-center w-full">
          <Button text={"See More Results"} />
        </div>

      </div>
    </div>
  )
}

export default BeforeAfter








// "use client"
// import React, { useRef } from "react"
// import { BEFORE_AFTER_DATA } from "@/utils/helper"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"
// import Icons from "./common/Icons"
// import Button from "./common/Button"

// const BeforeAfter = () => {
//   const swiperRef = useRef(null)

//   return (
//     <div className="pt-30">
//       <div className="max-w-285 mx-auto   pb-12.5 relative  overflow-visible">

//         {/* Heading */}
//         <div className="flex md:flex-row flex-col max-md:gap-y-4 max-md:text-center max-md:justify-center max-md:items-center  justify-between pb-12.5 max-[1350px]:px-5">
//           <h2 className="md:max-w-[436px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black">
//             Before & After: <span className="text-green text-nowrap">See the Difference</span>
//           </h2>
//           <p className="md:max-w-[427px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark">
//             From worn out sofas to sleek wall panels, nothing shows our work better than a side by side transformation. Slide to see the difference for yourself.
//           </p>
//         </div>

//         {/* CUSTOM LEFT ARROW */}
//         <button
//           onClick={() => swiperRef.current.swiper.slidePrev()}
//           className="absolute left-[-34px] max-[1220px]:left-0 top-[60%] -translate-y-1/2 z-50 rotate-180 cursor-pointer group opacity-70 hover:opacity-100"
//         >
//           <Icons icon={"SLIDER_ARROW"} pathClass={"fill-black group-hover:fill-green"} />
//         </button>

//         {/* CUSTOM RIGHT ARROW */}
//         <button
//           onClick={() => swiperRef.current.swiper.slideNext()}
//           className="absolute right-[-34px] max-[1220px]:right-0 top-[60%] -translate-y-1/2 z-50 group opacity-70 hover:opacity-100 cursor-pointer"
//         >
//           <Icons icon={"SLIDER_ARROW"} pathClass={"fill-black group-hover:fill-green"} />
//         </button>

//         {/* Swiper Slider */}
//         <Swiper
//           ref={swiperRef}
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={2}
//           slidesPerGroup={2}
//           grabCursor={true}
//           loop={true}
//           navigation={false} // ❌ DEFAULT ARROWS OFF
//           className="before-after-swiper"
//         >
//           {BEFORE_AFTER_DATA.map((item, i) => (
//             <SwiperSlide
//               key={i}
//               className="!w-[558px]"
//             >
//               <div className="rounded-2xl overflow-hidden border border-black/10">
//                 <img
//                   src={item.img}
//                   alt="before-after"
//                   className="w-[558px] h-[339px]"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="mt-7.5 flex justify-center">
//           <Button text={"See More Results"} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BeforeAfter





 