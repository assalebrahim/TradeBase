import React from 'react'
import { Link } from 'react-router-dom'

const Stock = () => {
    return (
        <div className='p-10'>
            <div>
                <h2 className='module-heading'>Stock Dashboard</h2>
                <div className='module-border h-80 w-full my-5'>
                    <h1>asdf</h1>
                </div>
            </div>
            <div className='module-border module-buttons'>
                <Link to="items" className='menu-button col-start-1 row-start-1'>Items</Link>
                <Link to="search" className='menu-button col-start-1 row-start-2'>Search</Link>
                <Link to="stock-register" className='menu-button col-start-2 row-start-1'>Stock Register</Link>
            </div>
        </div>
    )
}

export default Stock