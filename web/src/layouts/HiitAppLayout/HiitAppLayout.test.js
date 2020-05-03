import { render, cleanup } from '@testing-library/react'

import HiitAppLayout from './HiitAppLayout'

describe('HiitAppLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HiitAppLayout />)
    }).not.toThrow()
  })
})
