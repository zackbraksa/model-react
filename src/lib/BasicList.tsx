import React from 'react'
import { useSelector } from 'react-redux'

import { MaterialReactTable } from 'material-react-table'

// import { DataGrid } from '@mui/x-data-grid'

function BasicList(props: any) {
   let {
     onRowClick = () => {},
     data,
     columns,
   } = props
   
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()

  const vxg = useSelector((state: any) => state.main.vxg)
  
  return (
    <div className="BasicList">
      <MaterialReactTable 
        columns={columns} 
	data={data}
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event: any)=> {
            let selitem = { ...data[Number(row.id)] }
            onRowClick(event, selitem)
          },
	  sx: { cursor: 'pointer' },
	})}
	/>
    </div>)
    
}

export default BasicList

/*
  <DataGrid
    rows={rows}
    columns={cols}
    onRowClick={ (params) => {
      let selitem = { ...params.row }
      // console.log('item: ', selitem)
      onRowClick({}, selitem)
      
    }}

    checkboxSelection={false}
  />
*/
