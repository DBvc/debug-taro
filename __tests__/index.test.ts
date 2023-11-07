import { describe, expect, it } from '@jest/globals'

import { add } from '../src/utils'

describe('index', () => {
  it('should be ok', () => {
    expect(add(1, 2)).toBe(3)
  })
})
