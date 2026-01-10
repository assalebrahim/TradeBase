import React, { useState } from 'react'
import { ItemTable } from '../table/ItemsTable'
import { useInvoice } from '../../context/InvoiceContext'



export const Invoice = () => {

    const {
        formType,
        handleChange,
        showList,
        setShowList,
        search,
        setSearch,
        filteredProducts,
        setItems
    } = useInvoice();

    const [sellingRate, setSellingRate] = useState();


    return (
        <div className='flex flex-1 flex-col h-[70vh] module-border'>
            <div className='relative px-10 pt-5'>
                <h3 className='module-subheading'>Details</h3>
                <div className='module-buttons'>
                    <div className='col-start-1 row-start-1 flex flex-col'>
                        <label htmlFor="invNumber">{`${formType.name} Number`}</label>
                        <input type="text" name='invNumber' className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                    <div className='col-start-2 row-start-1 flex flex-col'>
                        <label htmlFor="date">Date</label>
                        <input type="date" name='date' className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                    <div className='col-start-1 row-start-2 flex flex-col'>
                        <label htmlFor="customer">{formType.party}</label>
                        <input type="text" name="customer" className='bg-[#D9D9D9] py-1 rounded-md px-2 focus:outline-black/30' />
                    </div>
                </div>
                <div className='border-bottom'></div>
            </div>
            <div className='px-10 py-5 flex-5'>
                <h2 className='module-subheading'>Items</h2>
                <div className='flex flex-col mt-5 gap-1 relative'>
                    <div className='bg-[#D9D9D9] rounded-lg flex justify-evenly flex-20 border-1 border-black/30'>


                        <input
                            type="text"
                            placeholder='Product Name / Code'
                            className='flex-6 focus:outline-none py-2'
                            // onChange={(e) => setSearch(e.target.value)}
                            onChange={handleChange}
                            onFocus={() => setShowList(true)}
                            onBlur={() => setTimeout(() => setShowList(false), 150)}
                            value={search}
                            required

                        />
                        <input
                            type="number"
                            placeholder='Qty'
                            className='flex-3 focus:outline-none'
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            placeholder='Amount'
                            className='flex-3 focus:outline-none'
                            required
                            value={sellingRate}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder='Dis %'
                            className='flex-3 focus:outline-none'
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder='Dis Amt'
                            className='flex-3 focus:outline-none'
                            onChange={handleChange}
                        />
                        <button
                            onClick={() => setItems((prev) => {
                                ({
                                    ...prev,

                                })
                            })}
                            className='text-white  bg-black text-2xl font-extrabold flex-1 rounded-lg cursor-pointer'>+</button>
                    </div>
                    {showList && <div className='absolute left-0 right-0 w-[30%] max-h-100 overflow-y-scroll top-10 z-100 border-1 border-black/30 rounded-lg bg-[#D9D9D9]'>
                        <ul>
                            {filteredProducts.map(item => (
                                <li
                                    onClick={() => {
                                        setSearch(item.name)
                                        setSellingRate(item.sellingRate)
                                        setSelectedItem(() => {
                                            ({
                                                id: item.id,
                                                product: item.name,
                                                qty: sellingRate,

                                            })
                                        })
                                    }}
                                    className='py-2 hover:bg-[#c0c0c0] px-3 cursor-pointer'>
                                    <h3 className='font-bold'>{item.name}</h3>
                                    <p className='font-light'>{item.code}</p>
                                </li>
                            ))}
                            <li className='py-1 px-2 hover:bg-[#C0C0C0] cursor-pointer'><span className='font-bold'>{"✚ "}</span>Create a new Item</li>
                            <li className='py-1 px-2 hover:bg-[#C0C0C0] cursor-pointer'><span className='font-bold'>{"🔍︎ "}</span>Advance Search</li>
                        </ul>
                    </div>}
                </div>
                <div className='flex-1 module-border mt-3'>
                    <ItemTable />
                </div>
                <div className='mt-2'>
                    <button className='bg-[#FB4D4D] px-4 py-1 rounded-lg text-white cursor-pointer'>🗑Delete</button>
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
