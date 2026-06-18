import { describe, it, expect } from 'vitest'
import getImageUrl from '../utils/getImageUrl'

describe('getImageUrl', () => {
    it('returns the full image URL given a poster path', () => {
        const result = getImageUrl('/abc123.jpg')
        expect(result).toBe('https://image.tmdb.org/t/p/w500/abc123.jpg')
    })

    it('works with different poster paths', () => {
        const result = getImageUrl('/batman.jpg')
        expect(result).toBe('https://image.tmdb.org/t/p/w500/batman.jpg')
    })
})
