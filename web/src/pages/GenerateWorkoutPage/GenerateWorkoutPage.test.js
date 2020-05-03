import { render, cleanup } from '@testing-library/react'

import GenerateWorkoutPage from './GenerateWorkoutPage'

describe('GenerateWorkoutPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<GenerateWorkoutPage />)
    }).not.toThrow()
  })
})
