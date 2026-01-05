
import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Sales from './pages/sales/Sales'
import { Route, Router, Routes } from 'react-router-dom'
import Quotation from './pages/sales/Quotation'
import SalesInvoice from './pages/sales/SalesInvoice'
import SalesReturn from './pages/sales/SalesReturn'
import PurchaseOrder from './pages/purchase/PurchaseOrder'
import PurchaseInvoice from './pages/purchase/PurchaseInvoice'
import PurchaseReturn from './pages/purchase/PurchaseReturn'
import Purchase from './pages/purchase/Purchase'
import Items from './pages/stock/Items'
import Stock from './pages/stock/Stock'
import Table from './components/table/Table'
import { Invoice } from './components/forms/Invoice'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />

        <div className='flex flex-col flex-1 m-6'>

          <Routes>
            <Route path='/sales' element={<Sales />} />
            <Route path='/sales/quotation' element={<Quotation />} />
            <Route path='/sales/sales-invoice' element={<SalesInvoice />} />
            <Route path='/sales/sales-return' element={<SalesReturn />} />

            <Route path='/purchase' element={<Purchase />} />
            <Route path='/purchase/purchase-order' element={<PurchaseOrder />} />
            <Route path='/purchase/purchase-invoice' element={<PurchaseInvoice />} />
            <Route path='/purchase/purchase-return' element={<PurchaseReturn />} />


            <Route path='/stock' element={<Stock />} />
            <Route path='/stock/items' element={<Items />} />
            <Route path='/invoice' element={<Invoice />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App