import { describe, it } from 'vitest'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithProviders } from './mocks/test-utils'
import { BasicHead } from '../src/lib/index'

describe('BasicHead', () => {
  it('happy', () => {
    // Cannot read properties of undefined (reading 'auth') -> const user = useSelector((state:any)=>state.main.auth.user)
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: { frame: { part: { head: { tool: { def: {} } } } } },
            },
          },
        },
        seneca: 'seneca',
      }
    }
    let spec = { frame: 'frame' }

    // Could not find react-redux context value (this is useSelector()); please ensure the component is wrapped in a <Provider>
    renderWithProviders(<BasicHead ctx={ctx} spec={spec} />, {
      wrapper: BrowserRouter,
      preloadedState: {
        main: { name: 'main', status: 'idle' }, // <-- Pass data for selector
      },
    })
  })
})
