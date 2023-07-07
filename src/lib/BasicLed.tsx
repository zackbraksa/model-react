
import React, {useState} from 'react'
import { useSelector } from 'react-redux'


import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import MuiGrid from '@mui/material/Grid'
import { Grid } from '@mui/material'


import { DataGrid } from '@mui/x-data-grid'

import { useForm, Controller } from "react-hook-form"

import BasicButton from './BasicButton'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

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



  const [showTable, setShowTable] = useState(false)
  const [triggerLed, setTriggerLed] = useState(0)

  const [item, setItem] = useState( ({} as any) )
  
  const def = spec.content.def
  const { ent, cols } = def

  const cmpstate = useSelector((state:any)=>state.main.vxg.cmp)
  
  const entstate = useSelector((state:any)=>state.main.vxg.ent.meta.main[ent].state)
  const entlist = useSelector((state:any)=>state.main.vxg.ent.list.main[ent])

  // console.log('entlist',entlist)
  
  if('none'===entstate) {
    let q = custom.BasicLed.query(spec,cmpstate)
    seneca.entity(def.ent).list$(q)
  }

  
  const rows = entlist

  const {
    handleSubmit,
    setValue,
    control
  } = useForm({
    defaultValues: ({ } as any),
  })

  const itemFields: any = fields(spec)
  
  return (
    <div className="BasicLed">

      {
      showTable ?
        <form
          className="vxg-form-field"
          onSubmit={handleSubmit( (data)=> {
            console.log('data: ', data)
            // handle data
            // let item = { ...data }
            // setItem(item)
         
          }) }
        >
          <Grid container spacing={3} >
            {
              itemFields.map((field: any) => {
                // console.log('register: ', item )
                
                return ( <Grid item xs={field.size}>
                  <Controller
                    name={field.field}
                    control={control}
                    defaultValue={item[field.field] || ''}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                      <TextField
                        key={ field.field }
                        label={ field.headerName }
                        fullWidth
                        disabled={ !!!field.edit }
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        error={!!error}
                        helperText={error ? error.message : null}
          
                      />)}
                    rules={ field.required ? { required: field.required, validate: (value) => true } : {} }
                  />
                </Grid> )
                
              })
            }
          
            <Grid item xs={12}>
              <Grid container justifyContent="space-between" alignItems="center" marginTop={2}>
                <Grid item>
                  <BasicButton variant="outlined"
                    size="large"
                    onClick={ () => { setShowTable(false) } }
                  >
                    Cancel
                  </BasicButton> 
                </Grid>
                <Grid item>
                  <BasicButton type="submit" variant="outlined"
                    size="large"
                    onClick={ ()=> {
                      console.log('item: ', item)
                    } }
                  >
                    SAVE
                  </BasicButton>
            
                </Grid>
              </Grid>
            </Grid>
          
          </Grid>
        </form> :
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
      /> }
      
    </div>
  )
}


export default BasicLed
