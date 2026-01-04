import React from 'react'

const PurchaseInvoice = () => {
    return (
        <div className='p-10 flex justify-between'>
            <h2 className='module-heading'>Purchase Invoice</h2>
            <div className='w-50 flex justify-between'>
                <span className='module-border py-2 px-4 items-center justify-start cursor-pointer'>...</span>
                <button className='text-white bg-black rounded-md p-2 cursor-pointer'>+Add Purchase Invoice</button>
            </div>
        </div>
    )
}

export default PurchaseInvoice