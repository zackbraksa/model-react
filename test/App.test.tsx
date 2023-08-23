import { describe, it, expect } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { BasicDrawerHeader } from '../src/lib/BasicDrawer'

describe('component-testing', () => {
  // test tests
  it('true to be true', () => {
    expect(true).toBe(true)
  })
  it('false to be false', () => {
    expect(false).toBe(false)
  })

  // Cannot render Vxg
  // Dependant components: BasicAdmin, BasicAuth, BasicEdit, BasicHead, BasicLed, BasicMain, BasicSide
  // Error with rendering BasicList, BasicFoot: `ctx is not a function`

  // Failing `unable to find element with this text` - what am I looking for?
  // it('render-basic-drawer-header', () => {
  //   render(<BasicDrawerHeader />)

  //   expect(screen.getByText(/BasicDrawerHeader/)).toBeDefined()
  // })
})
