import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='relative w-80 px-2 mx-1'>
            <nav className='flex flex-col px-10 py-15'>
                <Link to="/" className='sidebar-link'>DASHBOARD</Link>
                <Link to="/sales" className='sidebar-link'>SALES</Link>
                <Link to="/purchase" className='sidebar-link'>PURCHASE</Link>
                <Link to="/stock" className='sidebar-link'>STOCK</Link>
                <Link href="" className='sidebar-link'>ACCOUNTS</Link>
                <Link href="" className='sidebar-link'>MASTER</Link>
            </nav>
            <div className="absolute top-10 bottom-10 right-4 w-px bg-black opacity-30"></div>
        </div>
    )
}

export default Sidebar