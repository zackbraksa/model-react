import { describe, it, beforeEach, afterEach } from 'vitest'
import * as React from 'react'

import { customRender, ctx, spec, initialState, vxg } from './mocks/test-utils'
import { BasicLed } from '../src/lib/index'

describe('BasicLed', () => {
  const setLocation = (pathname: string) => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname
      }
    });
  }

  beforeEach(() => {
    setLocation('/view/task');
  });

  afterEach(() => {
    setLocation(window.location.pathname);
  });

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


