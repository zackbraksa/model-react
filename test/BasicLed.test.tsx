import { describe, it, beforeEach, afterEach } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState, vxg } from './mocks/test-utils'
import { BasicLed } from '../src/lib/index'

beforeEach(() => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/view/task'
    }
  });
});

describe('BasicLed', () => {
  it('happy', () => {

    const view = {
      content: {
        def: {
          ent: {
            canon: 'vxg/task'
          },
          add: {}
        }
      },
      name: 'task'
    }

    customRender(<BasicLed vxg={vxg} ctx={ctx} spec={view} />, {
      mockInitialState: initialState,
    })
  })
})

afterEach(() => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: window.location.pathname // Restore to the original value
    }
  });
});
