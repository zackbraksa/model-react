import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicDrawer } from '../src/lib/index'

describe('BasicDrawer', () => {
  it('happy', () => {
    render(<BasicDrawer />)
  })
})
