import { describe, it } from 'vitest'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithProviders } from './mocks/test-utils'
import { BasicLed } from '../src/lib/index'

describe('BasicLed', () => {
  it('happy', () => {
    // Cannot read properties of undefined (reading 'vxg') -> const vxgState = useSelector((state: any) => state.main.vxg)
    let ctx = () => {
      return { model: 'model', seneca: 'seneca', custom: 'custom' }
    }
    let spec = {}

    // Could not find react-redux context value (this is useSelector()); please ensure the component is wrapped in a <Provider>
    renderWithProviders(<BasicLed ctx={ctx} spec={spec} />, {
      wrapper: BrowserRouter,
      preloadedState: {
        main: { name: 'main', status: 'idle' }, // <-- Pass data for selector
      },
    })
  })
})
