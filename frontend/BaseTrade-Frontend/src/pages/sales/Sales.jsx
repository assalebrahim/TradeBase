import React from 'react'
import { Link } from 'react-router-dom'

const Sales = () => {
    return (
        <div className='p-10'>
            <div>
                <h2 className='module-heading'>Sales Dashboard</h2>
                <div className='module-border h-80 w-full my-5'>
                    <h1>asdf</h1>
                </div>
            </div>
            <div className='module-border module-buttons'>
                <Link to="quotation" className='menu-button col-start-1 row-start-1'>Quotation</Link>
                <Link to="sales-invoice" className='menu-button col-start-1 row-start-2'>Sales Invoice</Link>
                <Link to="sales-return" className='menu-button col-start-2 row-start-1'>Sales Return</Link>
            </div>
        </div>
    )
}

export default Sales