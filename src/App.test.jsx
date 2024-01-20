// sum.test.js
import { expect, test } from 'vitest'
import App from './App'

test('adds 1 + 2 to equal 3', () => {
  expect(App.sum(1, 2)).toBe(3)
})