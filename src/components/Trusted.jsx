"use client";

import { TRUSTED_CARD_DATA, TRUSTED_IMAGE_DATA } from "@/utils/helper";
import Marquee from "react-fast-marquee";
import React from "react";
import Icons from "./common/Icons";

function Trusted() {
    return (
        <div className="sm:pt-20 pt-10">
            <div className="max-w-360 mx-auto max-[1350px]:px-5">
                <p className="pb-8 italic font-poppins font-semibold sm:text-xl text-lg leading-160 text-center text-gray-light">
                    Trusted Our Service
                </p>
                <Marquee
                    speed={50}     
                    gradient={false} 
                    pauseOnHover={true}
                >
                    {TRUSTED_IMAGE_DATA.map((item, i) => (
                        <div key={i} className="sm:mx-6.25 mx-9.75">
                            <img
                                src={item.img}
                                alt="trusted"
                                className="sm:h-20 sm:w-45 w-35.25 h-15.75 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
                <div className="max-w-285 mx-auto md:mt-20 mt-11.5">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {TRUSTED_CARD_DATA.map((card,i) => { 
                    return <div key={i} className="border border-green/20 rounded-2xl p-5 hover:border-transparent hover:bg-offwhite hover:shadow-[0px_4px_25px_rgba(1,1,1,0.10)] transition-all duration-300">
                            <div className="flex items-center gap-5">
                            <div className="w-15 h-15 bg-[#1877F2] rounded-[52px] flex items-center justify-center">
                                <Icons icon={card.icon}/>
                                </div>
                                <div className="flex flex-col gap-1">
                                <strong className="font-poppins font-semibold sm:text-[28px] text-2xl sm:leading-120 leading-130 tracking-normal text-black italic">{card.title}</strong>
                                <p className="font-poppins font-normal sm:text-base text-sm sm:leading-120 leading-150 tracking-normal text-gray-dark">{card.description}</p>
                                </div>
                            </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trusted;




 