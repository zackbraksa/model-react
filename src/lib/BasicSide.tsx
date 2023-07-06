
import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'

// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  //Drawer,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material"


import MuiDrawer from '@mui/material/Drawer'

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


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  minHeight: '43px',
  border: '2px solid black',
  // border: '2px solid white',
  // padding: '10px 10px 10px 10px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))


interface DrawerProps {
  open?: boolean,
  drawerWidth?: any,
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerProps>(
  ({ theme, open, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme, drawerWidth),
      '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)


const openedMixin = (theme: Theme, drawerWidth: any): CSSObject => ({
  // backgroundColor: theme.palette.primary.main,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  display: 'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})



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

function onClose(seneca: any) {

  seneca.act('aim:app,set:state', {
    section: 'vxg.cmp.BasicSide.show',
    content: false
  })

}

function BasicSide(props: any) {
  const { ctx, spec } = props
  const { model, seneca, } = ctx()

  const vxg = useSelector((state: any) => state.main.vxg)
  const open = vxg.cmp.BasicSide.show
  
  
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
      return null
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
      drawerWidth = { drawerWidth }
      open={ open }
    >
      <DrawerHeader>
        <IconButton onClick={()=>onClose(seneca)}>
          <ChevronLeftIcon sx={{ color: 'black' }} />
        </IconButton>
      </DrawerHeader>
        
        
      <SectionButtons sections={ sectiondefs }/>
        {
          sectiondefs.map((section: any, sectionNumber: number) => {
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
