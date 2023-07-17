import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'


import { useForm, Controller } from "react-hook-form"

import BasicButton from './BasicButton'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import { MaterialReactTable } from 'material-react-table'

import BasicList from './BasicList'
import BasicEdit from './BasicEdit'

function fields (spec: any) {
  // console.log('layout: ', spec.content.def.cols)
  
  try {
    let fds = []
    let fns = spec.content.def.list.layout.order.replace(/\s+/g, '').split(/,/)
    for(let fn of fns) {
      let fd = { ...spec.content.def.cols.find((f: any)=> f.field == fn), } || {}
      // console.log('fd: ', fd)
      
      // fd.name = fn
      // fd.title = fd.title ? fd.title : fd.name
      
      // fd = { ...fd, ...(spec.edit.layout.field[fn] || {} ) }
      
      fds.push(fd)
    }
    // console.log('fds: ', fds)
    return fds
  }
  catch(err) {
   // console.log(err)
  }
  
  return spec.content.def.cols
}


function showTable(seneca: any, show: any) {

  seneca.act('aim:app,set:state', {
    section: 'vxg.cmp.BasicLed.tool.show.table',
    content: show,
  })
  
}


function BasicLed(props: any) {
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()

  const vxg = useSelector((state: any) => state.main.vxg)

  const [item, setItem] = useState( ({} as any) )
  
  const def = spec.content.def
  const { ent, cols } = def

  const cmpstate = useSelector((state:any)=>state.main.vxg.cmp)
  
  const entstate = useSelector((state:any)=>state.main.vxg.ent.meta.main[ent].state)
  const entlist = useSelector((state:any)=>state.main.vxg.ent.list.main[ent])
  
  const location = useLocation()

  // console.log('entlist',entlist)
  console.log('entstate: ', entstate)
  if('none'===entstate) {
    let q = custom.BasicLed.query(spec,cmpstate)
    seneca.entity(def.ent).list$(q)
  }

  
  const rows = entlist

  const forms = useForm({
    defaultValues: ({ } as any),
  })
  const {
    handleSubmit,
    setValue,
    control
  } = forms
  
  const itemFields: any = fields(spec)
  
  
  const columns = 
    itemFields.map((field: any) => 
      ({
        accessorFn: (row: any) => row[field.field],
        accessorKey: field.field,
        header: field.headerName,
        Header: () => <span>{ field.headerName }</span>,
        // muiTableHeadCellProps: { sx: { color: 'green' } },
        Cell: ({ cell }: any) => <span>{cell.getValue()}</span>,
      })
    )
  
  let data = rows //.slice(0, 10)
  console.log('data: ', data)
  
  
  
  const showCmp = vxg.cmp.BasicLed.tool.show.table
  
  
  useEffect(() => {
    showTable(seneca, false)
    setItem({})
    
  }, [ location.pathname ])
  
  let led_add = vxg.trigger.led.add
  let [triggerLed, setTriggerLed] = useState(0)
  useEffect( ()=> {

    // a workaround to prevent 
    // 'useEffect' to trigger when re-rendered
    if(triggerLed >= 2) {
      showTable(seneca, true)
      // reset fields
      for(let field of itemFields as any) {
        setValue(field.field, '')
      }

      setItem( {} )
    }

    setTriggerLed(++triggerLed)
  }, [ led_add ])
  
  
  return (
    <div className="BasicLed">
    {
      !showCmp ? 
      <BasicList
        ctx={ ctx }
        spec={ spec }
        data={data}
        itemFields={itemFields}
        columns={ columns }
        onRowClick = { (event: any, item: any) => {
          console.log('item: ', item)
          for(let field of itemFields as any) {
	    setValue(field.field, item[field.field])
	  }
	  showTable(seneca, true)
	  setItem(item)
        } }
      /> : 
        <BasicEdit
          ctx={ ctx }
          spec={ spec }
          onClose = { () => {
            showTable(seneca, false)
          } }
          onSubmit = { async (item: any) => {
            await seneca.entity(def.ent).save$(item)
            showTable(seneca, false)
          } }
          forms = { forms }
          item = { item }
          itemFields = { itemFields }
        />
    }
    </div>
  )
}


export default BasicLed
