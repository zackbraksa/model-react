import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicEdit } from '../src/lib/index'

describe('BasicEdit', () => {
  it('happy', () => {
    // vitest thinks .map() is an attribute and not a function
    let ctx = () => {
      return { model: 'model', seneca: 'seneca', custom: 'custom' }
    }
    let spec = {
      content: { def: 'def' },
      itemFields: { field1: { name: 'name' }, field2: { name: 'name' } },
    }

    render(<BasicEdit ctx={ctx} spec={spec} />)
  })
})
