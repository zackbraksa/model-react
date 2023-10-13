import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicEdit } from '../src/lib/index'
import { ctx, spec } from './mocks/test-utils'

describe('BasicEdit', () => {
  it('happy', () => {
    let itemFields = []

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

    render(<BasicEdit ctx={ctx} spec={view} itemFields={itemFields} />)
  })
})
