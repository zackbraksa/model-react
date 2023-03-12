
import React from 'react'
import { useSelector } from 'react-redux'

import {
  AppBar,
  Toolbar,
  TextField,
  Autocomplete,
  Typography,
} from "@mui/material"



function resolveOptions(tooldef: any, tooldata:any) {
  let options = []
  
  if('ent' === tooldef.options.kind && tooldata[tooldef.name]) {
    let ents = tooldata[tooldef.name].ents || []
    options = ents.map((ent:any)=>ent[tooldef.options.label.field])
  }
  
  return options
}



function BasicHead(props: any) {
  const { ctx, spec } = props
  const model = ctx().model
  
  const {
    frame,
  } = spec
  
  const part = model.app.web.frame[frame].part.head
  const tooldefs = Object.entries(part.tool.def)
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))

  const user = useSelector((state:any)=>state.main.auth.user)
  const userName = user.name || user.email

  let tooldata: any = {}
  tooldefs.forEach(tooldef=>{
    if('autocomplete'===tooldef.kind) {
      if('ent' === tooldef.options.kind) {
        let canon = tooldef.options.ent.split('/')
        tooldata[tooldef.name] = {
          ents: useSelector((state:any)=>state.main.vxg.ent[canon[0]][canon[1]])
        }
      }
    }
  }) 
  
  return (
    <AppBar
      position="fixed"
      sx={{
        color: 'black',
        bgcolor: "white",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <img src={part.logo.img}
          style={{width:'10rem', marginRight: '1rem'}} />

        { tooldefs.map(tooldef=>

          'autocomplete' === tooldef.kind ?
          <Autocomplete
            key={tooldef.name}
            options={resolveOptions(tooldef,tooldata)}
            size='small'
            sx={{ 
              width: '20rem',
            }}
            renderInput={(params) => <TextField {...params} label={tooldef.title} />}
          />

            :
          <></>
        )}

        <div style={{flexGrow:1}}></div>

        <Typography variant="h6">
          { userName }
        </Typography>
      </Toolbar>
    </AppBar>
  )
}


export default BasicHead
