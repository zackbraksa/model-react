
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
    options = ents.map((ent:any)=>({
      label: ent[tooldef.options.label.field],
      ent
    }))
  }

  return options
}



function BasicHead(props: any) {
  const { ctx, spec } = props
  const { model, seneca } = ctx()
  
  const {
    frame,
  } = spec
  
  const part = model.app.web.frame[frame].part.head
  const tooldefs = Object.entries(part.tool.def)
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))

  const user = useSelector((state:any)=>state.main.auth.user)
  const userName = user.name || user.email

  let valuemap:any = {}
  let tooldata: any = {}
  tooldefs.forEach(tooldef=>{
    if('autocomplete'===tooldef.kind) {
      if('ent' === tooldef.options.kind) {
        let canon = tooldef.options.ent
        tooldata[tooldef.name] = {
          ents: useSelector((state:any)=>state.main.vxg.ent.list.main[canon])
        }

        let selected = useSelector((state:any)=>
          state.main.vxg.cmp.BasicHead.tool[tooldef.name].selected)

        if(selected) {
          valuemap[tooldef.name] = {
            label: selected[tooldef.options.label.field],
            ent: selected
          }
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
          style={{width:'4rem', marginRight: '1rem'}} />

        { tooldefs.map(tooldef=>

          'autocomplete' === tooldef.kind ?
          <Autocomplete
            freeSolo = { true }
            forcePopupIcon={ true }
            value={valuemap[tooldef.name] || tooldef.defaultvalue || ''}
            key={tooldef.name}
            options={resolveOptions(tooldef,tooldata)}
            size='small'
            sx={{ 
              width: '20rem',
            }}
            renderInput={(params) => <TextField {...params} label={tooldef.title} />}
            onChange={(event:any,newval:any)=>{
              seneca.act('aim:app,set:state', {
                section: 'vxg.cmp.BasicHead.tool.'+tooldef.name+'.selected',
                content: newval.ent,
              })
            }}
            isOptionEqualToValue={(opt:any,val:any)=>
              (opt===val)||(null!=opt&&null!=val&&opt.ent?.id===val.ent?.id)}
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
