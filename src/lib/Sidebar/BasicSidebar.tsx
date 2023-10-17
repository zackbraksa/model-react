import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'

import {
    AppBar,
    Box,
    Button,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup,
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


import {
    ChevronLeft,
    MoveToInbox as InboxIcon,
    Mail as MailIcon,

    FactoryOutlined,
    KeyOutlined,
    AssignmentTurnedInOutlined,
    TextSnippetOutlined,
    HighlightAlt,
    SupervisorAccount as AccountIcon,
    Map as MapIcon,
    Tablet as TabletIcon,
    Update as UpdateIcon,
    Security as AdminIcon,
    ContentPaste as ClipBoardIcon,
    FitScreen,
    Apps as DotsSquareIcon,

} from "@mui/icons-material"

import {
    BasicDrawer,
    BasicDrawerHeader
} from '../BasicDrawer'
import { Exact, Gubu, Open } from 'gubu'

const iconmap: any = {
    'factory': FactoryOutlined,
    'key': KeyOutlined,
    'done': AssignmentTurnedInOutlined,
    'docs': TextSnippetOutlined,
    'hightlight': HighlightAlt,
    'map': MapIcon,
    'account': AccountIcon,
    'tablet': TabletIcon,
    'update': UpdateIcon,
    'admin': AdminIcon,
    'clipboard': ClipBoardIcon,
    'fitscreen': FitScreen,
    'dots-square': DotsSquareIcon,
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

function allow(vxg: any, item: any) {
    let out = (item && item.allow) ? vxg.allow(item.allow) : true
    return out
}


function BasicSidebar(props: any) {
    const {
        vxg,
        ctx,
        spec
    } = props
    const { model, seneca, } = ctx()

    const vxgState = useSelector((state: any) => state.main.vxg)
    const open = vxgState.cmp.BasicSide.show

    const navigate = useNavigate()
    const location = useLocation()

    const { frame } = spec

    // spec schema definition with Gubu
    const shape = Gubu(Open({
        side: {
            logo: { img: "" },
            section: [
                { name: "", kind: "", view: {}, button: { icon: String, text: String } },
            ]
        },
        view: {}
    }))

    // spec schema validation with Gubu
    shape(spec)

    console.log('spec', spec)

    const part = spec.side

    const viewmap = spec.view
    const viewdefs = Object.entries(viewmap)
        .map((entry: any) => (entry[1].name = entry[0], entry[1]))

    const sectiondefs = Object.entries(part.section || [])
        .map((entry: any) => (entry[1].name = entry[0], entry[1]))

    const viewPath: any = location.pathname.split('/')[2]

    const [showViewsData, setShowViewsData] = useState(sectiondefs.map((section: any, sectionNumber: number) => {
        return viewPath == section.name || (section.view && viewPath in section.view)
    }))
    const [toogleSelections, setToogleSelections] = useState({ [viewPath]: true } as any)

    const drawerwidth = '16rem'

    function selectView(view: any) {
        return function (_event: any) {
            // TODO: use named route
            if (view.default) {
                navigate('/view/' + view.default)
                return
            }
            navigate('/view/' + view.name)
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
        return function (_event: any) {
            setShowViewsData((showViewsData: any) => {
                const temp = showViewsData.map((_: Boolean) => false)
                temp[sectionNumber] = true
                return temp
            })
        }
    }


    const DefaultNavMenu = (props: any) => {
        const { navItem } = props
        return (
            <Box sx={{ overflow: 'auto' }}>
                <ToggleButtonGroup
                    orientation="vertical"
                    aria-label="text alignment"
                    sx={{ width: '100%' }}
                >
                    {
                        <ToggleButton
                            value="check"
                            selected={viewPath == navItem.name}
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
                            key={navItem.name}
                            aria-label="centered"
                            onClick={(event: any) => {
                                selectView(navItem)(event)
                            }}
                        >

                            {makeIcon(navItem.icon)}
                            <div>
                                <span>{navItem.title}</span>
                            </div>
                        </ToggleButton>
                    }
                </ToggleButtonGroup>
            </Box>
        )
    }

    return (
        <BasicDrawer
            variant="permanent"
            drawerwidth={drawerwidth}
            open={open}
        >
            <BasicDrawerHeader>
                <img src={part.logo.img}
                    style={{ width: '11rem' }} />
                <IconButton onClick={() => onClose(seneca)}>
                    <ChevronLeft sx={{ color: 'black' }} />
                </IconButton>
            </BasicDrawerHeader>
            <Divider />
            {
                Object.entries(spec.side.menu.sections).map(([key, value]: [any, any]) => {
                    console.log('value', value)
                    return (
                        <List>
                            {
                                Object.entries(value.items).map(([key, value]: [any, any]) => {
                                    return (
                                        <ListItem key={key} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={value.title} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                            <Divider />
                        </List>
                    )
                })
            }

        </BasicDrawer>
    )
}


export default BasicSidebar
