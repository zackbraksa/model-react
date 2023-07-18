import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'

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

function BasicLed(props: any) {
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()

  const vxg = useSelector((state: any) => state.main.vxg)

  const [item, setItem] = useState( {} as any)
  
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
  
  useEffect(() => {
    setItem({})
  }, [ location.pathname ])
  
  let led_add = vxg.trigger.led.add
  let [triggerLed, setTriggerLed] = useState(0)
  useEffect( ()=> {

    // a workaround to prevent 
    // 'useEffect' to trigger when re-rendered
    if(triggerLed >= 2) {
      setItem( { entity$: '-/' + def.ent } )
    }

    setTriggerLed(++triggerLed)
  }, [ led_add ])
  
  console.log('item::: ', item, def.ent)
  
  return (
    <div className="BasicLed">
    {
      '-/' + def.ent !==  item.entity$ ? 
        <BasicList
          ctx={ ctx }
          spec={ spec }
          data={data}
          itemFields={itemFields}
          columns={ columns }
          onRowClick = { (event: any, item: any) => {
            console.log('item: ', item)
	    setItem(item)
          } }
        /> : 
        <BasicEdit
          ctx={ ctx }
          spec={ spec }
          onClose = { () => {
            setItem({})
          } }
          onSubmit = { async (item: any) => {
            await seneca.entity(def.ent).save$(item)
            setItem({})
          } }
          item = { item }
          itemFields = { itemFields }
        />
    }
    </div>
  )
}


export default BasicLed
