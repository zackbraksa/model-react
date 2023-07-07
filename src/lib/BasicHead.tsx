
import React from 'react'
import { useSelector } from 'react-redux'


import {
  Toolbar,
  TextField,
  Autocomplete,
  Typography,
  IconButton,
} from "@mui/material"

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean,
  drawerwidth?: any,
}

// TODO: BasicAppBar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function onOpen(seneca: any) {
  seneca.act('aim:app,set:state', {
    section: 'vxg.cmp.BasicSide.show',
    content: true
  })
}


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
  
  const sideOpen = true
  const divStyle = {
    'paddingLeft': sideOpen ? '11.5em' : '0em',
    'paddingRight': sideOpen ? '1em' : '1em',
  }
  
  const vxg = useSelector((state: any) => state.main.vxg)
  const open = vxg.cmp.BasicSide.show
  
  let drawerwidth = '16rem'
  
  
  return (
    <AppBar
      //position="fixed"
      drawerwidth={drawerwidth}
      open={open}
      sx={{
        color: 'black',
        bgcolor: "white",
      }}
    >
      <Toolbar>
      
        <IconButton
          aria-label="open drawer"
          onClick={ () => onOpen(seneca) }
          edge="start"
          sx={{
            marginRight: 2,
            ...(open && { display: 'none' }),
          }}
         >
           <ChevronRightIcon />
         </IconButton>
          


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
