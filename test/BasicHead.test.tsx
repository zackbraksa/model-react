import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithProviders } from './mocks/test-utils'
import { BasicHead } from '../src/lib/index'

describe('BasicHead', () => {
  it('happy', () => {
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

    renderWithProviders(<BasicHead ctx={ctx} spec={spec} />, {
      wrapper: BrowserRouter,
      preloadedState: {
        main: { auth: { user: 'user' } },
      },
    })
  })
})
