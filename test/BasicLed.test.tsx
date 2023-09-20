import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState } from './mocks/test-utils'
import { BasicLed } from '../src/lib/index'

describe('BasicLed', () => {
  it('happy', () => {
    customRender(<BasicLed ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
