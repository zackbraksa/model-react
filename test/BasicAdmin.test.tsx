import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { BasicAdmin } from '../src/lib/index'

describe('BasicAdmin', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: {
                frame: {
                  part: { foot: 'foot', head: { tool: { def: {} } } },
                },
              },
            },
          },
        },
      }
    }
    let spec = { frame: 'frame' }

    render(
      <BrowserRouter>
        <BasicAdmin ctx={ctx} spec={spec} />
      </BrowserRouter>
    )
  })
})
