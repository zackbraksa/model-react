
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
import Box from '@mui/material/Box';



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
  
  let [editRow, setEditRow] = useState()
  
  let selectRow = (ids:any) => {
    let id = ids[0]
    let row: any = rows.find((r:any)=>r.id===id)

    if(row) {
      setEditRow(row)
    }
  }
  
  const open=()=>{}
  const processValueChange=()=>{}
  const applyChanges=()=>{}
  const cancelChanges=()=>{
    setEditRow(undefined)
  }

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
         
             })
           }
           >
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            {
              itemFields.map((field: any) => {
                
                return   <Box gridColumn={'span ' + field.size}>

  <TextField
                  key={ field.field }
                  label={ field.headerName }
                  fullWidth
                  { ... register( field.field ) }
          
                />
                  </Box>
                
                
              })
            }
          
          <br/>
          <BasicButton variant="outlined"
            sx = {{
              position: 'absolute',
              bottom: 0,
              left: 0,
              margin: 0,
            }}
            size="large"
            onClick={ () => { setShowTable(false) } }
          >
           Cancel
          </BasicButton> 
          
          <BasicButton type="submit" variant="outlined"
            sx = {{
              position: 'absolute',
              bottom: 0,
              right: 0,
              margin: 0,
            }}
            size="large"
            onClick={ ()=> {
              console.log('item: ', item)
            } }
          >
           SAVE
          </BasicButton> 
          
           </Box>
          </form>
          

  /*
        <div style={{
          border: '1px solid black',
          padding: 11,
          height: '100%',
          width: '100%',
          display: 'inline-grid',
        }}>
         
          <form
            className="vxg-form-field"
            onSubmit={handleSubmit( (data)=> {
              console.log('data: ', data)
              // handle data
              // let item = { ...data }
              // setItem(item)
         
             })
           }
           >
            {
              itemFields.map((field: any) => {
                
                return <TextField
                  key={ field.field }
                  label={ field.headerName }
                  style={ fieldStyle(field) }
                  { ... register( field.field ) }
          
                />
                
                
              })
            }
          
          <br/>
          <BasicButton variant="outlined"
            sx = {{
              position: 'absolute',
              bottom: 0,
              left: 0,
              margin: 0,
            }}
            size="large"
            onClick={ () => { setShowTable(false) } }
          >
           Cancel
          </BasicButton> 
          
          <BasicButton type="submit" variant="outlined"
            sx = {{
              position: 'absolute',
              bottom: 0,
              right: 0,
              margin: 0,
            }}
            size="large"
            onClick={ ()=> {
              console.log('item: ', item)
            } }
          >
           SAVE
          </BasicButton> 
          
           
          </form>
         

         
        </div> 
   */
        :


      <DataGrid
        rows={rows}
        columns={cols}
        onSelectionModelChange={selectRow}
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


function Popup(props:any) {
  let {
    row,
    columns,
    onChange,
    onApplyChanges,
    onCancelChanges,
    open
  } = props
  
  return <Dialog
    fullWidth
    open={open}
    onClose={onCancelChanges}
    aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Edit Details</DialogTitle>
    <DialogContent>
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={6}>
          <FormGroup>
            { columns.map((col:any)=>(
              <TextField
                key={col.field}
                margin="normal"
                name={col.field}
                label={col.headerName}
                value={row[col.field]}
                onChange={onChange}
              />
            ))}
          </FormGroup>
        </MuiGrid>
      </MuiGrid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancelChanges} color="secondary">
        Cancel
      </Button>
      <Button onClick={onApplyChanges} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
}


export default BasicLed
