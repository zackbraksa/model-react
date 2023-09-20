import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState } from './mocks/test-utils'
import { BasicSide } from '../src/lib/index'

describe('BasicSide', () => {
  it('happy', () => {
    customRender(<BasicSide ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
