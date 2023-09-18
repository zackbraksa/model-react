import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicSide } from '../src/lib/index'

describe('BasicSide', () => {
  it('happy', () => {
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: {
                frame: {
                  part: { side: { logo: { img: {} } } },
                  view: { view1: {}, view2: {} },
                },
              },
            },
          },
        },
        seneca: 'senca',
      }
    }
    let spec = { frame: 'frame' }
    let initialState = { main: { vxg: { cmp: { BasicSide: { show: {} } } } } }

    customRender(<BasicSide ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
