/* eslint-disable @typescript-eslint/ban-ts-comment */
import GameMainPage from '../pages/Game'
import { render, screen } from '@testing-library/react'

const appContent = 'Начать игру'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(<GameMainPage />)
  expect(screen.getByText(appContent)).toBeDefined()
})