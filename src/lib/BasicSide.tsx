
import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'

// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { useNavigate, useLocation } from 'react-router-dom'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

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
  // border: '2px solid black',
  // border: '2px solid white',
  // padding: '10px 10px 10px 10px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))


interface DrawerProps {
  open?: boolean,
  drawerwidth?: any,
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerProps>(
  ({ theme, open, drawerwidth }) => ({
    width: drawerwidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme, drawerwidth),
      '& .MuiDrawer-paper': openedMixin(theme, drawerwidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)


const openedMixin = (theme: Theme, drawerwidth: any): CSSObject => ({
  // backgroundColor: theme.palette.primary.main,
  width: drawerwidth,
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
  const location = useLocation()
  
  
  const { frame } = spec
  
  const part = model.app.web.frame[frame].part.side

  const viewmap = model.app.web.frame[frame].view
  const viewdefs = Object.entries(viewmap)
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))

  const sectiondefs = Object.entries(part.section || [])
    .map((entry:any)=>(entry[1].name=entry[0],entry[1]))
  
  const viewPath: any = location.pathname.split('/')[2]
  
  const [showViewsData, setShowViewsData] = useState(sectiondefs.map((section: any, sectionNumber: number) => {
    return viewPath == section.name || (section.view && viewPath in section.view)
  }))
  const [toogleSelections, setToogleSelections] = useState({[viewPath]: true} as any)
  
  const drawerwidth = '16rem'

  function selectView(view:any) {
    return function(_event:any) {
      // TODO: use named route
      if(view.default) {
        navigate('/view/'+view.default)
        return
      }
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
       <ToggleButtonGroup
        orientation="vertical"
        aria-label="text alignment"
        sx={{ width: '100%' }}
      >
        {
          sortViews(viewdefs, viewOrder).map((view:any) => (
            <ToggleButton
              value="check"
              selected={ viewPath == view.name }
              sx={
                {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '10px',
                  border: 0,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '20px !important',
                  },
                  textTransform: 'none'
                }
              } 
              key={view.name}
              aria-label="centered"
              onClick={(event: any) => {
                /*
                setToogleSelections((prev: any)=>{
                  for(let name in prev) {
                    prev[name] = false
                  }
                  prev[view.name] = true
                  return prev
                })
                */
                selectView(view)(event)
              }}
             >
                
               { makeIcon(view.icon) }
               <div>
                 <span>{ view.title }</span>
               </div>
             </ToggleButton>
          ))
        }  
       </ToggleButtonGroup>
     </Box>
    )
  }

  const SectionButtons = (props: any) => {
    const { sections } = props
    if(sections.length === 1) {
      return null
    }

    return (
      <Box sx= {{ display: 'flex', width: '100%' }}>
        <ButtonGroup sx={{ width: '100%',}}>
          {
            sections.map((section: any, sectionNumber: number) => (
              <ToggleButton
                value="check"
                selected={showViewsData[sectionNumber]}
                sx={{ padding: '0.5em', width: '100%' }} 
                key={section.name}
                onChange={(event: any) => {
                  toggle(sectionNumber)(event)
                  selectView(section)(event)
                }}
              >
                <div>
                  { makeIcon(section.button.icon) }
                  <span className="iconText">{ section.button.text }</span>
                </div>
              </ToggleButton>
            ))}
        </ButtonGroup>
      </Box>
    )
  }

  return (
    <Drawer
      variant="permanent"
      drawerwidth = { drawerwidth }
      open={ open }
    >
      <DrawerHeader>
        <img src={part.logo.img}
          style={ { width: '11rem' } } />
        <IconButton onClick={()=>onClose(seneca)}>
          <ChevronLeftIcon sx={{ color: 'black' }} />
        </IconButton>
      </DrawerHeader>
        
        
      <SectionButtons sections={ sectiondefs }/>
        {
          sectiondefs.map((section: any, sectionNumber: number) => {
            if(viewPath == section.name || (section.view && viewPath in section.view) ) {
      
              if('navmenu' === section.kind) {
                return (
                  <DefaultNavMenu key={section.name} viewOrder={section.view} viewdefs={viewdefs}/>
                )
              }

              const Cmp:any = ctx().cmp[section.cmp]
              return (
                <Cmp key={section.name} ctx={ctx} spec={spec}/>
              )
            }
          })
        }
    </Drawer>
    )
}


export default BasicSide
