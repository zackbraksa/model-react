import { describe, it } from 'vitest'
import * as React from 'react'

import { customRender } from './mocks/test-utils'
import { BasicLed } from '../src/lib/index'

describe('BasicLed', () => {
  it('happy', () => {
    let ctx = () => {
      return { model: 'model', seneca: 'seneca', custom: 'custom' }
    }
    let spec = { content: { def: { ent: { canon: 'canon' } } } }
    let initialState = {
      main: {
        vxg: {
          ent: {
            meta: { main: { canon: { state: {} } } },
            list: { main: { canon: {} } },
          },
          trigger: { led: { add: {} } },
        },
      },
    }

    customRender(<BasicLed ctx={ctx} spec={spec} />, {
      mockInitialState: initialState,
    })
  })
})
