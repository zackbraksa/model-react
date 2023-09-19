import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicEdit } from '../src/lib/index'
import { ctx, spec } from './mocks/test-utils'

describe('BasicEdit', () => {
  it('happy', () => {
    let itemFields = []

    render(<BasicEdit ctx={ctx} spec={spec} itemFields={itemFields} />)
  })
})
