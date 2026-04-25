import React from 'react'

function Button({ text, className, icon }) {
    return (
        <button
            className={`font-poppins font-semibold text-base leading-162 tracking-normal rounded-[245px] cursor-pointer transition-all duration-300 px-7 py-2.75 text-offwhite bg-green flex items-center ${icon ? "sm:gap-2.5 gap-0" : ""} border border-transparent hover:border-green hover:bg-offwhite hover:text-green ${className}`}
        >
            {icon && <span className="max-sm:hidden">{icon}</span>}
            {text}
        </button>
    )
}

export default Button