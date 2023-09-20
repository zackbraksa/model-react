import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicAppBar } from '../src/lib/index'

describe('BasicAppBar', () => {
  it('happy', () => {
    render(<BasicAppBar />)
  })
})
