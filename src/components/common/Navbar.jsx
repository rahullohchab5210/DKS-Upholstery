"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NAVLINKS_DATA } from "@/utils/helper";
import Button from "./Button";
import Icons from "./Icons";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    return (
        <div className="py-3.75 bg-offwhite fixed top-0 w-full z-999">
            <div className="max-w-285 mx-auto max-[1350px]:px-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" onClick={() => setMenuOpen(false)} className="cursor-pointer z-999">
                        <img src="/images/webp/logo-image.webp" alt="logo" />
                    </Link>

                    {/* Nav Links */}
                    <nav className="lg:border lg:border-black/12 lg:py-2 lg:px-5 lg:rounded-[46px]">
                        <ul className={`flex gap-8 lg:items-center max-lg:flex-col lg:flex-row   z-50  max-[500px]:items-center max-lg:px-10 max-sm:px-5 max-lg:pt-40   max-[1024px]:fixed max-[1024px]:bg-white    max-[1024px]:h-screen max-[1024px]:w-1/2 max-[500px]:w-full max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}>
                            {NAVLINKS_DATA.map((item, index) => (
                                <li key={index} onClick={() => setMenuOpen(false)} className="relative group">

                                    {/* Main Link */}
                                    <div className="flex items-center gap-1 cursor-pointer font-poppins text-base text-black hover:text-green">
                                        <Link href={item.path}>{item.title}</Link>

                                        {item.submenu && (
                                            <span className="transition-transform duration-300 group-hover:rotate-180">
                                                <Icons icon={"DROPDOWN"} />
                                            </span>
                                        )}
                                    </div>

                                    {/* Dropdown */}
                                    {item.submenu && (
                                        <ul className="absolute top-full left-0 mt-2 px-4 bg-white shadow-lg rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            {item.submenu.map((subitem, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={subitem.path}
                                                        className="block px-4 py-2 text-base font-normal text-black hover:bg-gray-100 whitespace-nowrap"
                                                    >
                                                        {subitem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </li>
                            ))}
                            <Button text="Get Free Quote" className={"lg:hidden w-fit"} />
                        </ul>
                    </nav>

                    {/* Button */}
                    <Button text="Get Free Quote"  className={"max-lg:hidden"}/>
                    <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} aria-label="Open menu" className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-999 cursor-pointer">
                        <span className={`block w-7 h-0.5 rounded-[30px] bg-black transition-all duration-300 ${menuOpen === "show" ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-7 h-0.5 rounded-[30px] bg-black transition-all duration-300 ${menuOpen === "show" ? "opacity-0" : ""}`} />
                        <span className={`block w-7 h-0.5 rounded-[30px] bg-black transition-all duration-300 ${menuOpen === "show" ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                    <div
                        className={`fixed lg:hidden inset-0 bg-black/50 z-20 w-full h-screen transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;












// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { NAVLINKS_DATA } from "@/utils/helper";
// import Button from "./Button";
// import Icons from "./Icons";

// function Navbar() {
//     const [openDropdown, setOpenDropdown] = useState(null);

//     return (
//         <div className="py-3.75">
//             <div className="max-w-285 mx-auto max-[1350px]:px-4">
//                 <div className="flex items-center justify-between">

//                     {/* Logo */}
//                     <Link href="/" className="cursor-pointer">
//                         <img src="/images/webp/logo-image.webp" alt="logo" />
//                     </Link>

//                     {/* Nav Links */}
//                     <nav className="border border-black/12 py-2 px-5 rounded-[46px]">
//                         <ul className="flex items-center gap-8">
//                             {NAVLINKS_DATA.map((item, index) => (
//                                 <li key={index} className="relative group">

//                                     {/* Main link */}
//                                     <div
//                                         className="flex items-center gap-1 cursor-pointer font-poppins text-base text-black hover:text-green"
//                                         onMouseEnter={() => setOpenDropdown(index)}
//                                         onMouseLeave={() => setOpenDropdown(null)}
//                                     >
//                                         <Link href={item.path}>{item.title}</Link>

//                                         {/* ▼ arrow for dropdown */}
//                                         {item.submenu && (
//                                         <Icons icon={"DROPDOWN"}/>
//                                         )}
//                                     </div>

//                                     {/* Dropdown */}
//                                     {item.submenu && openDropdown === index && (
//                                         <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-lg py-2 px-4 z-50">
//                                             {item.submenu.map((subitem, i) => (
//                                                 <li key={i}>
//                                                     <Link
//                                                         href={subitem.path}
//                                                         className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
//                                                     >
//                                                         {subitem.title}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>

//                     {/* Button */}
//                     <Button text="Get Free Quote" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;









// import { NAVLINKS_DATA } from '@/utils/helper'
// import Link from 'next/link'
// import React from 'react'
// import Button from './Button'

// function Navbar() {
//     return (
//         <div className='py-3.75'>
//             <div className='max-w-285 mx-auto max-[1350px]:px-4'>
//                 <div className='flex items-center justify-between'>
//                     <Link href={"/"} className='cursor-pointer' >
//                         <img src="/images/webp/logo-image.webp" alt="logo" />
//                     </Link>
//                     <div className='border border-black/12 py-2 px-5 rounded-[46px]'>
//                         <div className='flex  flex-row gap-8'>
//                             {NAVLINKS_DATA.map((item, i) => {
//                                 return <Link key={i} href={item.path} className='font-poppins font-normal text-base text-black hover:text-green leading-162 tracking-normal'>
//                                     {item.title}
//                                 </Link>
//                             })}
//                         </div>
//                     </div>
//                     <Button
//                         text={"Get Free Quote"}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar