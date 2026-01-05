import React from 'react'

const Navbar = (navbarDir) => {
    return (
        <div className='relative'>
            <div className='flex justify-between px-7.5 py-5'>
                <h1 className='font-bold text-xl'>{`TradeBase ${navbarDir}`}</h1>
                <div>Image</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#828282] opacity-30"></div>
        </div>
    )
}

export default Navbar