import React, { useMemo, } from 'react'
import { REGISTER_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    // getFilteredRowModel,
    flexRender
} from '@tanstack/react-table'

const RegisterTable = () => {

    const columns = useMemo(() => REGISTER_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    // const [invFilter, setInvFilter] = useState("")
    // const [customerFilter, setCustomerFilter] = useState("")
    // const [dateFilter, setDateFilter] = useState("")

    const table =
        useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            // getFilteredRowModel: getFilteredRowModel(),
            // state: {
            //     columnFilters: [
            //         { id: 'inv-number', value: invFilter },
            //         { id: 'customer', value: customerFilter },
            //         { id: 'date', value: dateFilter },
            //     ]
            // }
        })

    return (
        <div className='flex py-5 px-10 h-[70vh] flex-col'>
            {/* <div className='module-border' style={{ borderRadius: "20px 20px 0 0" }}>
                <input
                    type="text"
                    placeholder='Inv Number...'
                    className='bg-[#D9D9D9] mx-5 my-4 p-1 rounded-md'
                    value={invFilter}
                    onChange={(e) => setInvFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Customer...'
                    className='bg-[#D9D9D9] mx-5 my-4 p-1 rounded-md'
                    value={customerFilter}
                    onChange={(e) => setCustomerFilter(e.target.value)}
                />
                <input
                    type="date"
                    className='bg-[#D9D9D9] mx-5 my-4 p-1 rounded-md'
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                />
            </div> */}
            <div className='flex-1 module-border h-[70vh] overflow-scroll overflow-x-hidden' style={{ borderRadius: "0 0 20px 20px" }}>
                <table className='min-w-full'>
                    <thead className='w-full table-head sticky top-0 z-10'>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} className='table-head'>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className='text-left px-5 py-1 opacity-50 cursor-pointer'
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: '↑',
                                            desc: '↓'
                                        }[header.column.getIsSorted()] ?? null}
                                    </th>
                                ))}
                            </tr>
                        ))}

                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row) => (

                            <tr key={row.id} className='table-data-row'>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}
                                        className='text-left px-5 py-3 table-border-bottom'
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                                <div className="absolute left-4 right-4 bottom-0 h-px bg-gray-300"></div>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RegisterTable