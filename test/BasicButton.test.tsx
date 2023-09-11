import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicButton } from '../src/lib/index'

describe('BasicButton', () => {
  it('happy', () => {
    render(<BasicButton />)
  })
})
