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
    ChatBubble as ChatBubbleIcon,
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
    Event as EventIcon,
    Logout as LogoutIcon,
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
    'chat-bubble': ChatBubbleIcon,
    'event': EventIcon,
    'logout': LogoutIcon,
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

    function handleListItemClick(key: any, navItem: any) {
        navigate('/view/' + key)
    }

    const sections = spec.side.menu.sections

    return (
        <BasicDrawer
            variant="permanent"
            drawerwidth='16rem'
            open={open}
        >
            <BasicDrawerHeader>
                <img src={part.logo.img}
                    style={{ width: '5rem' }} />
                <IconButton onClick={() => onClose(seneca)}>
                    <ChevronLeft sx={{ color: 'black' }} />
                </IconButton>
            </BasicDrawerHeader>
            <Divider />
            {
                Object.entries(sections).map(([key, section]: [any, any]) => {
                    console.log('section:', section)
                    return (
                        <List>
                            {
                                Object.entries(section.items).map(([key, navItem]: [any, any]) => {
                                    console.log('navItem', navItem)
                                    return (
                                        <ListItem
                                            key={key}
                                            disablePadding
                                            onClick={() => handleListItemClick(key, navItem)}
                                        >
                                            <ListItemButton selected={viewPath == key}>
                                                <ListItemIcon>
                                                    {makeIcon(navItem.icon)}
                                                </ListItemIcon>
                                                <ListItemText primary={navItem.title} />
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
