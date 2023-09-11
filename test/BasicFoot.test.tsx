import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicFoot } from '../src/lib/index'

describe('BasicFoot', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: { web: { frame: { frame: { part: { foot: 'foot' } } } } },
        },
      }
    }
    let spec = { frame: 'frame' }

    render(<BasicFoot ctx={ctx} spec={spec} />)
  })
})
