import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicMain } from '../src/lib/index'

describe('BasicMain', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: {
                frame: { part: { foot: 'foot' } },
                private: { view: [{ name: 'view1' }] },
              },
            },
          },
        },
        content: 'content',
      }
    }
    let spec = { frame: 'frame' }
    let initialState = { main: { vxg: { cmp: { BasicSide: {} } } } }

    customRender(<BasicMain ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
