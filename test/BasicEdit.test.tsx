import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicEdit } from '../src/lib/index'

describe('BasicEdit', () => {
  it('happy', () => {
    let ctx = () => {
      return { model: 'model', seneca: 'seneca', custom: 'custom' }
    }
    let spec = {
      content: { def: 'def' },
    }
    let itemFields = []

    render(<BasicEdit ctx={ctx} spec={spec} itemFields={itemFields} />)
  })
})
