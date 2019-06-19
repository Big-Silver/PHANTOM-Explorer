import coinmarketcapService from '@/services/coin-market-cap'
import store from '@/store'

describe('Coinmarketcap Service', () => {
  beforeAll(() => {
    store.dispatch('network/setServer', 'https://explorer.phantom.io:8443/api')
  })

  it('should return price for PHANTOM in given currency', async () => {
    const data = await coinmarketcapService.price('USD')
    expect(data).toBeGreaterThan(0)
  })
})
