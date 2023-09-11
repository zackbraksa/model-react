import { describe, it } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'

import { BasicAuth } from '../src/lib/index'

describe('BasicAuth', () => {
  it('happy', () => {
    let ctx = () => {}
    let spec = { img: { logo: 'logo' }, handle: { signin: () => {} } }

    render(<BasicAuth ctx={ctx} spec={spec} />)
  })
})
