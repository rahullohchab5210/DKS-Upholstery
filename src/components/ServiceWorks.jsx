"use-client"
import { SERVICE_WORKS_DATA } from '@/utils/helper'
import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'

function ServiceWorks() {
  return (
    <div className='md:pt-30 pt-12.5 relative'>
      <div className='absolute top-0 left-0'>
        <img src="/assets/images/webp/ellipse-one.webp" alt="ellipse" />
      </div>
      <div className='max-w-285 mx-auto max-[1350px]:px-5'>
        <div className='flex flex-col items-center text-center sm:pb-12.5 pb-14.75'>
          <h2 className='sm:pb-3.75 pb-4 font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black'>
            How Our Upholstery <span className='text-green'>Service Works</span>
          </h2>
          <p className='max-w-[730px] font-poppins sm:text-base text-sm font-normal leading-160 tracking-normal text-gray-dark'>Getting your sofa, chair, or cushions reupholstered in Singapore is simple. Here’s how our 3 step process makes it easy from start to finish.</p>
        </div>
        <div className='flex flex-col items-center md:gap-10.5 gap-6 relative'>
          {SERVICE_WORKS_DATA.map((item, i) => (
            <div className='max-w-[934px] max-md:mx-3.75 border border-green/24 hover:border-offwhite/24 hover:bg-green/8 rounded-2xl group transition-all duration-300'>
              <div className='flex md:flex-row flex-col md:items-center max-md:gap-y-5'>
                <img src={item.img} alt="image" className='w-full h-full md:max-w-[257px] max-h-[268px] rounded-l-2xl' />
                <div className='md:pl-11 md:pr-8.5 px-3.5 max-md:pb-3.5'>
                  <div className='flex sm:flex-col flex-row max-sm:gap-2.5'> 
                  <div className='w-10 h-10 shrink-0 border border-green flex items-center justify-center rounded-full group-hover:bg-green mb-5 transition-all duration-300'>
                    <span className='font-inter font-medium text-2xl leading-120 tracking-normal text-green group-hover:text-white'>{item.count}</span>
                    </div>
                    <div> 
                  <span className='font-inter font-semibold sm:text-body text-[22px] leading-130 tracking-normal text-black'>{item.title}</span>
                  <p className='sm:pt-3 pt-4 font-poppins font-normal sm:text-base text-sm leading-160 tracking-normal text-gray-dark group-hover:text-black'>{item.description}</p>
                </div>
                </div>
                </div>
              </div>
            </div>
          ))}
          <div className='absolute top-[116px] left-0 max-xl:hidden '>
            <Icons icon={"SERVICE_WORKS_ARROW"} />
          </div>
          <div className='absolute bottom-[127px] right-0 scale-x-[-1] max-xl:hidden'>
            <Icons icon={"SERVICE_WORKS_ARROW"} />
          </div>
        </div>
        <div className='mt-7.5 flex justify-center'>
          <Button
            icon={<Icons icon={"SEND_PHOTO"} />}
            text={"Step 1 : Send Photo"}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceWorks