import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicList } from '../src/lib/index'

describe('BasicList', () => {
  it('happy', () => {
    let ctx = () => {
      return { model: 'model', seneca: 'seneca', custom: 'custom' }
    }
    let spec = {}
    let initialState = { main: { vxg: {} } }

    customRender(<BasicList ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
