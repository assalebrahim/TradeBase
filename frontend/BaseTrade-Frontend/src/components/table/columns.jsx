export const REGISTER_COLUMNS = [
    {
        // id: 'inv-number',
        header: 'Inv Number',
        accessorKey: 'Inv Number'
    },
    {
        id: 'date',
        header: 'Date',
        accessorKey: 'Date'
    },
    {
        id: 'customer',
        header: 'Customer',
        accessorKey: 'Customer'
    },
    {
        id: 'amount',
        header: 'Amount',
        accessorKey: 'Amount'
    },
    {
        id: 'paymod',
        header: 'Paymod',
        accessorKey: 'Paymod'
    }
]

export const ITEM_COLUMNS = [
    {
        id: 'select',
        header: () => '▢',
        size: 30,
        cell: ({ row }) => (
            <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
            />
        )
    },
    {
        header: 'Item',
        accessorKey: 'item',
        size: 450
    },
    {
        header: 'Qty',
        accessorKey: 'qty',
        size: 80
    },
    {
        header: 'Rate',
        accessorKey: 'rate',
        size: 100
    },
    {
        header: 'Net Rate',
        accessorKey: 'netRate',
        size: 120
    },
    {
        header: 'VAT%',
        accessorKey: 'vat',
        size: 80
    },
    {
        header: 'VAT AMT',
        accessorKey: 'vatAmt',
        size: 100
    },
    {
        header: 'Net Amount',
        accessorKey: 'netAmt',
        size: 120
    }
]