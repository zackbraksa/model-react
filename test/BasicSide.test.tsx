import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicSide } from '../src/lib/index'

describe('BasicSide', () => {
  it('happy', () => {
    // Cannot read properties of undefined (reading 'vxg') -> const vxgState = useSelector((state: any) => state.main.vxg)
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: {
                frame: { part: { side: {} } },
                view: { view1: 'view1', view2: 'view2' },
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
