import React from 'react'
import { ItemTable } from '../table/ItemsTable'

export const Invoice = () => {
    return (
        <div className='flex flex-1 flex-col h-[70vh] module-border'>
            <div className='relative px-10 pt-5'>
                <h3 className='module-subheading'>Details</h3>
                <div className='module-buttons'>
                    <div className='col-start-1 row-start-1 flex flex-col'>
                        <label htmlFor="invNumber">Invoice Number</label>
                        <input type="text" name='invNumber' className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                    <div className='col-start-2 row-start-1 flex flex-col'>
                        <label htmlFor="date">Date</label>
                        <input type="date" name='date' className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                    <div className='col-start-1 row-start-2 flex flex-col'>
                        <label htmlFor="customer">Customer</label>
                        <input type="text" name="customer" className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                </div>
                <div className='border-bottom'></div>
            </div>
            <div className='px-10 py-5 flex-5'>
                <h2 className='module-subheading'>Items</h2>
                <div className='flex mt-5 gap-1'>
                    <div className='bg-[#D9D9D9] px-2 py-2 rounded-lg flex justify-evenly flex-20 border-1 border-black/30'>
                        <input type="text" placeholder='Product Name / Code' className='flex-4 focus:outline-none' />
                        <input type="number" placeholder='Qty' className='flex-2 focus:outline-none' />
                        <input type="number" placeholder='Amount' className='flex-2 focus:outline-none' />
                        <input type="number" placeholder='Dis %' className='flex-2 focus:outline-none' />
                        <input type="number" placeholder='Dis Amt' className='flex-2 focus:outline-none' />
                    </div>
                    <button className='text-white bg-black text-2xl font-extrabold flex-1 rounded-lg cursor-pointer'>+</button>
                </div>
                <div className='flex-1 module-border mt-3'>
                    <ItemTable />
                </div>
                <div className='mt-2'>
                    <button className='bg-[#FB4D4D] px-4 py-1 rounded-lg text-white cursor-pointer'>Delete</button>
                </div>
            </div>
            <div className='flex-1 px-10 flex justify-between'>
                <div>
                    <label htmlFor="">Remarks:</label>
                    <input type="text" className='bg-[#D9D9D9] focus:outline-black/30 flex flex-col rounded-lg w-2xl' />
                </div>
                <div>
                    <label htmlFor="">Payment Mode</label>
                    <select className='bg-[#D9D9D9] focus:outline-black/30 flex flex-col rounded-lg' >
                        <option value="cash">Cash</option>
                        <option value="transfer">transfer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Total (AED)</label>
                    <input type="text" className='bg-[#D9D9D9] focus:outline-black/30 flex flex-col rounded-lg' />
                </div>
            </div>
        </div>
    )
}
