import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, Resize, Sort, Filter, Edit, Inject, PdfExport, ExcelExport, ContextMenu } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, ContextMenu, Filter, PdfExport, ExcelExport, Edit, Sort, Resize]} />
      </GridComponent>
    </div>
  )
}

export default Orders