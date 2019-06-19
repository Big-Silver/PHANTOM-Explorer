import axios from 'axios'

class CoinMarketCapService {
  async price(currency) {
    const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/phantom/?convert=${currency}`)
    return Number(response.data[0][`price_${currency.toLowerCase()}`])
  }
}

export default new CoinMarketCapService()
