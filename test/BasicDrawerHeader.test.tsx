import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicDrawerHeader } from '../src/lib/index'

describe('BasicDrawerHeader', () => {
  it('happy', () => {
    render(<BasicDrawerHeader />)
  })
})
