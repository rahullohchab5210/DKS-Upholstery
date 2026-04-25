import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'

function Upholstery_experts() {
    return (
        <div className="bg-[url('/images/webp/trusted-bg.webp')] bg-cover bg-center bg-no-repeat sm:pt-11.25 sm:pb-13.75 pt-12.5 pb-12.5 bg-[#FAF9F5]"> 
      <div className='max-w-198.75 mx-auto max-[1350px]:px-8.25'>
          <div className=' '>
                    <div className='flex flex-col gap-4 text-center'>
                  <h2 className='font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black'>
                      Your Trusted Upholstery <span className='text-green'>Experts in Singapore</span>
                  </h2>
                  <p className='max-w-[729px] font-poppins font-normal sm:text-base text-sm sm:leading-160 leading-150 tracking-normal text-gray-dark'>
                      For over 18 years, we’ve perfected the art of upholstery. From sofas and chairs to custom built panels and commercial projects, every piece is crafted with premium materials and backed by our 12 month workmanship warranty.
                  </p>
                    </div>
                    <div className='mt-7.5 flex justify-center'>
                        <Button className={" max-sm:text-sm text-nowrap"}
                            icon={<Icons icon={"WHATSAPP"} className={"max-sm:hidden"}/>}
                            text={"WhatsApp Us Now"}
                        />
                    </div>  

          </div>
            </div>
        </div>
  )
}

export default Upholstery_experts