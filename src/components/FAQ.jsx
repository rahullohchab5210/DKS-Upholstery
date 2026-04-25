"use client"
import { FAQ_DATA } from '@/utils/helper'
import React, { useState } from 'react'
import Icons from './common/Icons';

function FAQ() {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className='md:py-30 pb-12.5 pt-20 relative'>
            <div className='absolute bottom-0 left-0'>
                <img src="/images/webp/ellipse-two.webp" alt="ellipse-two" />
            </div>
            <div className='max-w-285 mx-auto max-[1350px]:px-5'>
                
                <div className='flex lg:flex-row flex-col max-lg:items-center gap-10'>
                    <h2 className='lg:max-w-[435px] font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-[28px] sm:leading-120 leading-130 tracking-normal text-black max-lg:text-center'>
                        Frequently Asked <span className='text-green'>Questions</span>
                    </h2>


                    <div className="w-full lg:w-166.25 flex flex-col gap-3">
                        {FAQ_DATA.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    onClick={() => toggle(faq.id)}
                                    className={`rounded-xl cursor-pointer border p-4 transition-all duration-200 overflow-hidden ${isOpen
                                            ? "border-[#010101] bg-[#20AE190F]"
                                            : "border-[#0101011F]"
                                        }`}
                                >
                                    <button
                                         
                                        className="w-full flex items-center cursor-pointer justify-between text-left"
                                    >
                                        <span className="text-sm sm:text-base leading-[160%] text-[#010101] font-semibold">
                                            {faq.question}
                                        </span>
                                        <span className="shrink-0 text-gray-500 text-lg">
                                            {isOpen ? (
                                                <Icons icon={"UP_ARROW"} />
                                            ) : (
                                                <Icons icon={"DOWN_ARROW"} />
                                            )}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="max-w-full lg:max-w-134.75 pt-2">
                                            <p className="text-sm sm:text-base font-normal text-[#010101] leading-160 font-poppins">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ