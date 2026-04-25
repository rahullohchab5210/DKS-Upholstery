"use client";
import React from "react";
import Icons from "./common/Icons";
import Button from "./common/Button";

function FreeQuote() {
    return (
        <div className="max-w-285 mx-auto max-[1350px]:px-5 w-full  md:-mt-[116px] max-md:mt-10 ">
            <div className="bg-offwhite shadow-[0px_4px_25px_rgba(1,1,1,0.10)] sm:rounded-4xl rounded-[20px] sm:py-10 sm:px-12.25 max-sm:p-5">

                {/* INPUTS  */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
 
                    <div className=" w-full">
                        <label className="font-poppins font-medium text-sm sm:leading-160 leading-150 tracking-normal text-black flex items-center gap-1.5 pb-1.5">
                         <Icons icon={"NAME"}/>
                            Name*
                        </label>
                        <input
                            type="text"
                            placeholder="Enter First and Last Name"
                            className="w-full border border-black/12 rounded-[36px] px-4 py-4 outline-none focus:border-green font-medium sm:text-xs text-[10px] sm:leading-150 leading-100 tracking-normal text-gray-dark"
                        />
                    </div>
                    <div className=" w-full">
                        <label className="font-poppins font-medium text-sm leading-160 tracking-normal text-black flex items-center gap-1.5 pb-1.5">
                            <Icons icon={"CONTACT"} />
                            Contact*
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Mobile"
                            className="w-full border border-black/12 rounded-[36px] px-4 py-4 outline-none focus:border-green font-medium text-xs leading-150 tracking-normal text-gray-dark"
                        />
                    </div>
                    <div className="w-full">
                        <label className="font-poppins font-medium text-sm leading-160 text-black flex items-center gap-1.5 pb-1.5">
                            <Icons icon={"UPLOAD"} />
                            Upload Photos
                        </label>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            id="upload"
                            className="hidden"
                            onChange={(e) => console.log(e.target.files)}
                        />

                        {/* Clickable Upload Box */}
                        <label
                            htmlFor="upload"
                            className="flex items-center gap-1.5 w-full border border-dashed border-black/12 rounded-[36px] px-4 py-4 font-medium text-xs text-gray-dark opacity-80 cursor-pointer"
                        >
                            <Icons icon={"DROP_IMAGE"} />
                            Drop your image
                        </label>
                    </div>
                </div>


                <Button className={"w-full flex items-center justify-center mt-6"}
                    text={"Get Free Quote"}
                />
            </div>
        </div>
    );
}

export default FreeQuote;











// import React from 'react'

// function FreeQuote() {
//   return (
//       <div className='max-w-285 mx-auto max-[1350px]:px-4 mt-[32.01px]'>
//           <div className='bg-offwhite shadow-[0px_4px_25px_rgba(1,1,1,0.1)] rounded-4xl py-10 px-12.25'>
              
//           </div>
//     </div>
//   )
// }

// export default FreeQuote