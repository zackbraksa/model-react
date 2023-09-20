import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState } from './mocks/test-utils'
import { BasicMain } from '../src/lib/index'

describe('BasicMain', () => {
  it('happy', () => {
    customRender(<BasicMain ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
