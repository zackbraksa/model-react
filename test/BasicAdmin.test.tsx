import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicAdmin } from '../src/lib/index'

describe('BasicAdmin', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: { web: { frame: { frame: { part: { foot: 'foot' } } } } },
        },
      }
    }
    let spec = { frame: 'frame' }

    render(<BasicAdmin ctx={ctx} spec={spec} />)
  })
})
