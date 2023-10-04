import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// extend vite's expect method with matchers from react test lib
// expect.extend(matchers);

// cleanup after each test case (clearing jsdom etc)
afterEach(() => {
  cleanup()
})
