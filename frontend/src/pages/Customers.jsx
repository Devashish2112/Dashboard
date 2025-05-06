import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, Resize, Sort, Filter, Edit, Inject, PdfExport, ExcelExport, ContextMenu } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid, contextMenuItems } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={['Delete']}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Edit, Sort, Filter, Page ,Toolbar]} />

      </GridComponent>
    </div>
  )
}

export default Customers