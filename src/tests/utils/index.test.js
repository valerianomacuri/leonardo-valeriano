import { getGifts } from '../../utils'

describe('utils tests', () => {
  it('test getGifts without arguments', () => {
    const gifts = getGifts()
    const result = {
      bici: 3,
      coche: 2,
      pelota: 1,
      peluche: 1
    }
    expect(gifts).toEqual(result)
  })
  it('test getGifts with arguments', () => {
    const gifts = getGifts('react _react angular vue vue _svelte')
    const result = {
      react: 1,
      vue: 2,
      angular: 1
    }
    expect(gifts).toEqual(result)
  })
})
