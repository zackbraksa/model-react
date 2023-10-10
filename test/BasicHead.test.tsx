import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import * as React from 'react'
import { customRender, ctx, spec, initialState, vxg } from './mocks/test-utils'
import { BasicHead } from '../src/lib/index'

beforeEach(() => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/view/task'
    }
  });
});

describe('BasicHead', () => {
  it.only('happy', () => {

    const headSpec = {
      head: {
        logo: { img: 'img.png' },
        tool: { def: [] }
      },
      view: {
        task: {
          content: {
            def: {
              add: {}
            }
          },
          name: 'task'
        }
      }
    }
    
    const { screen } = customRender(<BasicHead vxg={vxg} ctx={ctx} spec={headSpec} />, {
      mockInitialState: initialState
    })

    expect(screen.getByText('name')).toBeInTheDocument()
  })
})

afterEach(() => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: window.location.pathname // Restore to the original value
    }
  });
});