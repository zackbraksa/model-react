
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
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

  // show first section view by default
  const [showViewsData, setShowViewsData] = useState([true])
  
  const { frame } = spec
  
  const part = model.app.web.frame[frame].part.side

  const viewmap = model.app.web.frame[frame].view
  const viewdefs = Object.entries(viewmap)
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))

  const sectiondefs = Object.entries(part.section || [])
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))

  let drawerWidth = '16rem'


  function selectView(view:any) {
    return function(_event:any) {
      // TODO: use named route
      navigate('/view/'+view.name)
    }
  }

  function sortViews(viewdefs: any, viewOrder: any) {
    const orderedViews = Object.keys(viewOrder).map((viewName) => (
      (viewdefs.filter((viewdef: any) => viewdef.name === viewName))[0]
    ))
    // remove not prevously valid views
    return orderedViews.filter((view) => view !== undefined)
  }
  

  function toggle(sectionNumber: any) {
    return function(_event: any) {
      setShowViewsData((showViewsData: any) => {
        const temp = showViewsData.map((_ : Boolean) => false)
        temp[sectionNumber] = true
        return temp
      })
    }
  }


  const DefaultNavMenu = (props: any) => {
    const { viewdefs, viewOrder } = props
    return (
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {sortViews(viewdefs, viewOrder).map((view:any) => (
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
    )
  }

  const SectionButtons = (props: any) => {
    const { sections } = props
    if(sections.length === 1) {
      return null;
    }

    return (
      <Box sx= {{ display: 'flex' }}>
        <ButtonGroup size="large" aria-label="large button group">
          {
            sections.map((section: any, sectionNumber: number) => (
              <Button key={section.name} onClick={ (event)=>{
                toggle(sectionNumber)(event)
                selectView(section)(event)
              }}>
                <div>
                  { makeIcon(section.button.icon) }
                  <span className="iconText">{ section.button.text }</span>
                </div>
              </Button>
            ))}
        </ButtonGroup>
      </Box>
    )
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
      <SectionButtons sections={ sectiondefs }/>
      {sectiondefs.map((section: any, sectionNumber: number) => {
        const showCurrentSection = showViewsData[sectionNumber]
        if('navmenu' === section.kind) {
          return (
            showCurrentSection && <DefaultNavMenu viewOrder={section.view} viewdefs={viewdefs}/>
          )
        }

        const Cmp:any = ctx().cmp[section.cmp]
        return (
          showCurrentSection && <Cmp ctx={ctx} spec={spec}/>
        )
        })
      }
    </Drawer>
    )
}


export default BasicSide
