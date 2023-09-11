import { describe, it } from 'vitest'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithProviders } from './mocks/test-utils'
import { BasicMain } from '../src/lib/index'

describe('BasicMain', () => {
  it('happy', () => {
    // Cannot read properties of undefined (reading 'vxg') -> const sideOpen = useSelector((state: any) => state.main.vxg.cmp.BasicSi…
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: {
                frame: { part: { foot: 'foot' } },
                private: { view: 'view' },
              },
            },
          },
        },
        content: 'content',
      }
    }
    let spec = { frame: 'frame' }

    // Could not find react-redux context value (this is useSelector()); please ensure the component is wrapped in a <Provider>
    renderWithProviders(<BasicMain ctx={ctx} spec={spec} />, {
      wrapper: BrowserRouter,
      preloadedState: {
        main: { name: 'main', status: 'idle' }, // <-- Pass data for selector
      },
    })
  })
})
