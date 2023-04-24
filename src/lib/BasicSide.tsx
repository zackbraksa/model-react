
import React from 'react'

import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,

  // mdiAccount,
  // mdiHistory,
  // mdiFactory,
  // mdiGate,
  // mdiKeyChain,
  // mdiMapLegend,
  // mdiFileDocumentOutline,

  FactoryOutlined,
  KeyOutlined,
  AssignmentTurnedInOutlined,
  TextSnippetOutlined,  
  HighlightAlt,
  Map as MapIcon,

} from "@mui/icons-material"



const iconmap: any = {
  'factory': FactoryOutlined,
  'key': KeyOutlined,
  'done': AssignmentTurnedInOutlined,
  'docs': TextSnippetOutlined,
  'hightlight': HighlightAlt,
  'map': MapIcon,
}

function makeIcon(name: string) {
  let Icon = iconmap[name]
  return <Icon />
}

function BasicSide(props: any) {
  const { ctx, spec } = props
  const model = ctx().model

  const navigate = useNavigate()
  
  const { frame } = spec
  
  const part = model.app.web.frame[frame].part.side

  const viewmap = model.app.web.frame[frame].view
  const viewdefs = Object.entries(viewmap)
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))
  
  let drawerWidth = '16rem'


  function selectView(view:any) {
    return function(_event:any) {
      // TODO: use named route
      navigate('/view/'+view.name)
    }
  }
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {viewdefs.map((view:any) => (
            <ListItem key={view.name} disablePadding>
              <ListItemButton
                onClick={selectView(view)}
              >
                <ListItemIcon>
                  { makeIcon(view.icon) }
                </ListItemIcon>
                <ListItemText primary={view.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    )
}


export default BasicSide
