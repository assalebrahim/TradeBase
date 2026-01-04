import React from 'react'
import { Link } from 'react-router-dom'

const Purchase = () => {
    return (
        <div className='p-10'>
            <div>
                <h2 className='module-heading'>Purchase Dashboard</h2>
                <div className='module-border h-80 w-full my-5'>
                    <h1>asdf</h1>
                </div>
            </div>
            <div className='module-border module-buttons'>
                <Link to="purchase-order" className='menu-button col-start-1 row-start-1'>Purchase Order</Link>
                <Link to="purchase-invoice" className='menu-button col-start-1 row-start-2'>Purchase Invoice</Link>
                <Link to="purchase-return" className='menu-button col-start-2 row-start-1'>Purchase Return</Link>
            </div>
        </div>
    )
}

export default Purchase