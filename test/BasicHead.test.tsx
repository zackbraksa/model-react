import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState } from './mocks/test-utils'
import { BasicHead } from '../src/lib/index'

describe('BasicHead', () => {
  it('happy', () => {
    customRender(<BasicHead ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
