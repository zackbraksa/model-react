import React from 'react'
import { useSelector } from 'react-redux'

import { MaterialReactTable } from 'material-react-table'

// import { DataGrid } from '@mui/x-data-grid'

function BasicList(props: any) {
   let {
     data,
     itemFields,
     columns,
     Cmp,
     showCmp,
     setShowCmp,
     forms,
     item,
     setItem,
   } = props
   
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()

  const vxg = useSelector((state: any) => state.main.vxg)
  
  const {
    handleSubmit,
    setValue,
    control
  } = forms
  
  return (
    <div className="BasicList">
      {
        showCmp ?
          Cmp
        :
	<MaterialReactTable 
	  columns={columns} 
	  data={data}
          muiTableBodyRowProps={({ row }) => ({
            onClick: (event: any)=> {
              let selitem = { ...data[Number(row.id)] }
              console.log('item: ', item)
              for(let field of itemFields as any) {
	        setValue(field.field, selitem[field.field])
	      }
	      setShowCmp(true)
	      setItem(selitem)
            },
	    sx: { cursor: 'pointer' },
	  })}
	/>
    }
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


  for(let field of itemFields as any) {
    setValue(field.field, selitem[field.field])
  }

  setShowTable(true)

  setItem(selitem)



}}

checkboxSelection={false}
/>
*/
