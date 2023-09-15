import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicHead } from '../src/lib/index'

describe('BasicHead', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: { frame: { part: { head: { tool: { def: {} } } } } },
            },
          },
        },
        seneca: 'seneca',
      }
    }
    let spec = { frame: 'frame' }
    let initialState = {
      main: { auth: {} },
    }

    customRender(<BasicHead ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
