import { createContext, useContext, useState } from "react";

export const InvoiceContext = createContext(null)

const products = [
    { id: 1, name: "CLUTCH CABLE", code: 'SKB1234', sellingRate: 100, vat: 18, },
    { id: 2, name: "BRAKE CABLE", code: 'SKB1235', sellingRate: 100, vat: 18, },
    { id: 3, name: "GEAR CABLE", code: 'SKB1236', sellingRate: 100, vat: 18, },
    { id: 4, name: "CLUTCH PLATE", code: 'SKB1237', sellingRate: 100, vat: 18, },
    { id: 1, name: "CLUTCH CABLE", code: 'SKB1234', sellingRate: 100, vat: 18, },
    { id: 2, name: "BRAKE CABLE", code: 'SKB1235', sellingRate: 100, vat: 18, },
    { id: 3, name: "GEAR CABLE", code: 'SKB1236', sellingRate: 100, vat: 18, },
    { id: 4, name: "CLUTCH PLATE", code: 'SKB1237', sellingRate: 100, vat: 18, }
];

const mockData = [
    {
        item: "CLUTCH CABLE HH",
        qty: 2,
        rate: 150,
        netRate: 300,
        vat: 18,
        vatAmt: 54,
        netAmt: 354
    },
    {
        item: "CLUTCH CABLE TVS",
        qty: 2,
        rate: 150,
        netRate: 300,
        vat: 18,
        vatAmt: 54,
        netAmt: 354
    }
]

export const InvoiceProvider = ({ children }) => {

    const [search, setSearch] = useState("")
    const [showList, setShowList] = useState(false)

    const [formType, setFormType] = useState({
        name: 'Invoice',
        party: 'Customer',
    })

    const [selectedItem, setSelectedItem] = useState({
        product: '',
        qty: '',
        rate: '',
        discountPercent: '',
        discountAmount: '',
        netRate: '',
        vat: '',
        vatAmt: '',
        netAmt: ''
    })

    const [items, setItems] = useState([
        {
            product: '',
            qty: '',
            rate: '',
            discountPercent: '',
            discountAmount: '',
            netRate: '',
            vat: '',
            vatAmt: '',
            netAmt: ''
        }
    ])

    const handleChange = (e) => {
        const { name, value } = e.target
        setItems(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [itemsData, setItemsData] = useState(mockData)

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <InvoiceContext.Provider
            value={{
                items,
                itemsData,
                formType,
                handleChange,
                search,
                setSearch,
                showList,
                setShowList,
                filteredProducts,
                setItems,
                selectedItem,
                setSelectedItem
            }}>
            {children}
        </InvoiceContext.Provider>
    )

}

export const useInvoice = () => {
    const contextValue = useContext(InvoiceContext)
    return contextValue
}