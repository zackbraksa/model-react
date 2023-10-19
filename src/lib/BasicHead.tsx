
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'

import { Gubu, Exact, Open } from 'gubu'

import {
  Toolbar,
  TextField,
  Autocomplete,
  Typography,
  IconButton,
  createFilterOptions
} from '@mui/material'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import BasicButton from './BasicButton'
import BasicAppBar from './BasicAppBar'
import BasicAutocomplete from './Header/BasicAutoComplete'

function onOpen(seneca: any) {
  seneca.act('aim:app,set:state', {
    section: 'vxg.cmp.BasicSide.show',
    content: true
  })
}

const filter = createFilterOptions()



function addItem(seneca: any, led_add: any) {
  seneca.act('aim:app,set:state', {
    section: 'vxg.trigger.led.add',
    content: ++led_add
  })
}

function BasicHead(props: any) {
  const {
    vxg,
    ctx,
    spec
  } = props

  const { seneca } = ctx()

  const {
    frame
  } = spec

  // spec schema definition with Gubu
  const shape = Gubu(Open({
    head: {
      logo: { img: '' },
      tool: { def: [{ kind: Exact('addbutton', 'autocomplete'), title: String, options: {}, name: '' }] }
    },
    view: {}
  }))

  shape(spec)

  const actions = Object.entries(spec.head.tool.def)
    .map((entry: any) => (entry[1].name = entry[0], entry[1]))

  const user = useSelector((state: any) => state.main.auth.user)
  const userName = user.name || user.email

  const valuemap: any = {}
  const tooldata: any = {}

  // Building tooldata and valuemap
  actions.forEach(action => {
    if (action.kind === 'autocomplete') {
      if (action.options.kind === 'ent') {
        const canon = action.options.ent
        tooldata[action.name] = {
          ents: useSelector((state: any) => state.main.vxg.ent.list.main[canon])
        }

        const selected = useSelector((state: any) =>
          state.main.vxg.cmp.BasicHead.tool[action.name].selected)

        if (selected) {
          valuemap[action.name] = {
            label: selected[action.options.label.field],
            ent: selected
          }
        }
      }
    }
  })

  const vxgState = useSelector((state: any) => state.main.vxg)

  // sidebar open state
  const open = vxgState.cmp.BasicSide.show

  // ListEdit add trigger
  const led_add = vxgState.trigger.led.add

  const location = useLocation()
  const viewPath: any = location.pathname.split('/')[2]
  const add = spec.view[viewPath].content.def.add || { active: false }

  return (
    <BasicAppBar
      // position="fixed"
      drawerwidth='16rem'
      open={open}
      sx={{
        color: 'black',
        bgcolor: 'white'
      }}
    >
      <Toolbar>
        <IconButton
          aria-label='open drawer'
          onClick={() => onOpen(seneca)}
          edge='start'
          sx={{
            marginRight: 2,
            ...(open && { display: 'none' })
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {actions.map(action => {
          if (action.kind === 'autocomplete') {
            return (
              <BasicAutocomplete seneca={seneca} tooldef={action} tooldata={tooldata} valuemap={valuemap} />
            )
          } else if (action.kind === 'addbutton') {
            return (
              <BasicButton
                variant='outlined'
                key={action.name}
                sx={{
                  display: add.active ? null : 'none',
                  textTransform: 'capitalize'
                }}
                size='large'
                onClick={() => addItem(seneca, led_add)}
              >
                {action.title + ' ' + spec.view[viewPath].name}
              </BasicButton>
            )
          }
        }
        )}

        <div style={{ flexGrow: 1 }} />

        <Typography variant='h6'>
          {userName}
        </Typography>
      </Toolbar>
    </BasicAppBar>
  )
}

export default BasicHead

