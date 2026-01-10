import React, { useMemo } from 'react'
import { ITEM_COLUMNS } from './columns'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useInvoice } from '../../context/InvoiceContext'


export const ItemTable = (total) => {


    const { itemsData } = useInvoice()
    const columns = useMemo(() => ITEM_COLUMNS, [])
    const data = useMemo(() => itemsData, [])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true
    })

    return (
        <div className='h-[30vh] overflow-y-scroll'>
            <table className='w-full table-fixed h-full'>
                <thead className='border-bottom-th sticky top-0 z-10'>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className='table-head-border-right bg-[#D9D9D9] rounded-tl-lg rounded-tr-md'>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className='text-start px-5 py-1 items-table-head'>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className='max-h-[200px]'>
                    {table.getRowModel().rows.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center py-6 text-gray-400"
                            >
                                No items added
                            </td>
                        </tr>
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className='table-head-border-right align-top'>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='px-5 py-2'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )
                    }
                </tbody>

                <tfoot className='border-t-[0.5px] border-t-black/30 z-10 bg-[#D9D9D9] sticky bottom-0 w-full'>
                    <tr className='table-head-border-right'>
                        <td></td>
                        <td className='text-end px-5 font-medium'>Total</td>
                        <td>{total.qty}</td>
                        <td>{total.rate}</td>
                        <td>{total.netRate}</td>
                        <td></td>
                        <td>{total.vatAmt}</td>
                        <td>{total.netAmt}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
