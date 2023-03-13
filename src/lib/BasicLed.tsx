
import React, {useState} from 'react'
import { useSelector } from 'react-redux'


import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MuiGrid from '@mui/material/Grid';


import { DataGrid } from '@mui/x-data-grid';



function BasicLed(props: any) {
  const { ctx, spec } = props
  const { model, seneca, custom } = ctx()

  const def = spec.content.def
  const { ent, cols } = def

  const cmpstate = useSelector((state:any)=>state.main.vxg.cmp)
  
  const entstate = useSelector((state:any)=>state.main.vxg.ent.meta.main[def.ent].state)
  const entlist = useSelector((state:any)=>state.main.vxg.ent.list.main[def.ent])

  if('none'===entstate) {
    let q = custom.BasicLed.query(spec,cmpstate)
    seneca.act('aim:web,on:entity,list:entity,debounce$:true', {
      canon: def.ent,
      q,
    })
  }

  
  const rows = entlist
  
  let [editRow, setEditRow] = useState()
  
  let selectRow = (ids:any) => {
    let id = ids[0]
    let row: any = rows.find(r=>r.id===id)
    console.log(row)

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

  
  return (
    <div style={{ height:'calc(100vh - 6rem)', width: 'calc(100vw - 18rem)' }}>

      { editRow &&
        <Popup
          open={open}
          row={editRow}
          columns={cols}
          onChange={processValueChange}
          onApplyChanges={applyChanges}
          onCancelChanges={cancelChanges}
        />      
      }
      
      <DataGrid
        rows={rows}
        columns={cols}
        onSelectionModelChange={selectRow}
      />
      
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
