import React from 'react'

const SalesReturn = () => {
    return (
        <div className='p-10 flex justify-between'>
            <h2 className='module-heading'>Quotation</h2>
            <div className='w-50 flex justify-between'>
                <span className='module-border py-2 px-4 items-center justify-start cursor-pointer'>...</span>
                <button className='text-white bg-black rounded-md p-2 cursor-pointer'>+Add Sales Return</button>
            </div>
        </div>
    )
}

export default SalesReturn