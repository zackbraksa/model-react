
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

import { useForm } from "react-hook-form"

import BasicButton from './BasicButton'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


function fieldStyle(field: any) {
  return {
    flexBasis: (100*field.size/12) + '%',
    padding: '0em 1em 1em 0em',
  }
}

function BasicLed(props: any) {
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()



  const [showTable, setShowTable] = useState(false)
  const [triggerLed, setTriggerLed] = useState(0)

  const [item, setItem] = useState( ({} as any) )

  console.log('spec',spec)
  
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
  console.log('rows: ', rows)
  console.log('cols: ', cols)

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: ({ } as any),
  })

  const itemFields: any = cols.map((field: any) => field)

  const sideOpen = true
  const divStyle = {
    'paddingLeft': sideOpen ? '11.5em' : '0em',
    'paddingRight': sideOpen ? '1em' : '1em',
  }

  
  return (
    <div className="BasicLed" style={ divStyle } >

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
                
                return ( <Grid item xs={field.size}>

                  <TextField
                    key={ field.field }
                    label={ field.headerName }
                    fullWidth
                    { ... register( field.field ) }
          
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
          console.log('item: ', selitem)


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
