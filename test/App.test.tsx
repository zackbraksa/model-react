import { describe, it, expect } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import BasicAdmin from '../src/lib/BasicAdmin'
import BasicAppBar from '../src/lib/BasicAppBar'
import BasicAuth from '../src/lib/BasicAuth'
import BasicButton from '../src/lib/BasicButton'
import { BasicDrawer } from '../src/lib/BasicDrawer'
import { BasicDrawerHeader } from '../src/lib/BasicDrawer'
import BasicEdit from '../src/lib/BasicEdit'
import BasicFoot from '../src/lib/BasicFoot'
import BasicHead from '../src/lib/BasicHead'
import BasicLed from '../src/lib/BasicLed'
import BasicList from '../src/lib/BasicList'
import BasicMain from '../src/lib/BasicMain'
import BasicSide from '../src/lib/BasicSide'
// import { BasicAppBar } from '../src/lib/index'
import Vxg from '../src/lib/vxg'

describe('render-component', () => {
  // it('render-basic-admin', () => {
  //   // ctx is not a function
  //   render(<BasicAdmin />)
  // })
  it('render-basic-appbar', () => {
    render(<BasicAppBar />)
    screen.debug()
  })
  // it('render-basic-auth', () => {
  //   // Cannot destructure property 'handle' of 'spec' as it is undefined.
  //   render(<BasicAuth />)
  // })
  it('render-basic-button', () => {
    render(<BasicButton />)
    screen.debug()
  })
  it('render-basic-drawer', () => {
    render(<BasicDrawer />)
    screen.debug()
  })
  it('render-basic-drawer-header', () => {
    render(<BasicDrawerHeader />)
    screen.debug()
  })
  // it('render-basic-edit', () => {
  //   // ctx is not a function
  //   render(<BasicEdit />)
  // })
  // it('render-basic-foot', () => {
  //   // ctx is not a function
  //   render(<BasicFoot />)
  // })
  // it('render-basic-head', () => {
  //   // ctx is not a function
  //   render(<BasicHead />)
  // })
  // it('render-basic-led', () => {
  //   // ctx is not a function
  //   render(<BasicLed />)
  // })
  // it('render-basic-list', () => {
  //   // ctx is not a function
  //   render(<BasicList />)
  // })
  // it('render-basic-main', () => {
  //   // ctx is not a function
  //   render(<BasicMain />)
  // })
  // it('render-basic-side', () => {
  //   // ctx is not a function
  //   render(<BasicSide />)
  // })
})
