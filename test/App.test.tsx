import { describe, it, expect } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { BasicDrawer } from '../src/lib/BasicDrawer'

describe('component-testing', () => {
  // test tests
  it('true to be true', () => {
    expect(true).toBe(true)
  })
  it('false to be false', () => {
    expect(false).toBe(false)
  })

  // it('render-basic-drawer-header', () => {
  //   render(<BasicDrawer />)

  //   expect(screen.getByText(/BasicDrawer/)).toBeDefined()
  // })
})
