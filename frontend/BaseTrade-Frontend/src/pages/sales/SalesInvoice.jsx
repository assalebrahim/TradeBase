import React from 'react'

const SalesInvoice = () => {
    return (
        <div className='p-10 flex justify-between'>
            <h2 className='module-heading'>Sales Invoice</h2>
            <div className='w-50 flex justify-between'>
                <span className='module-border py-2 px-4 items-center justify-start cursor-pointer'>...</span>
                <button className='text-white bg-black rounded-md p-2 cursor-pointer'>+Add Sales Invoice</button>
            </div>
        </div>
    )
}

export default SalesInvoice