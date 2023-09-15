import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
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
                private: {
                  view: { undefined: { content: { def: { add: {} } } } },
                },
              },
            },
          },
        },
      }
    }
    let spec = { frame: 'frame' }
    let initialState = {
      main: {
        auth: { user: { name: 'name' } },
        vxg: {
          cmp: { BasicSide: { show: {} } },
          trigger: { led: { add: {} } },
        },
      },
    }

    customRender(<BasicAdmin ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
