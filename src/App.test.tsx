import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('render "react-typescript-template" text', () => {
    const component = screen.getByText(/react-typescript-template/i)
    expect(component).toBeInTheDocument()
  })
})
