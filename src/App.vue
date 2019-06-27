<template>
  <div id="app">
    <h1 class="text-center headline">CryptoCurrency</h1>
    <table id="cryptoTable" class="table table-hover">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="(column, index) in columns"
            :key="index">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <Coin
          v-for="(coin_properties, index) in coins"
          :key="index"
          :id="index + 1"
          :coin_properties="coin_properties">
        </Coin>
      </tbody>
    </table>
    <hr>
  </div>
</template>

<script>
import Coin from './components/Coin.vue'

export default {
  name: 'app',
  data() {
    return {
      coins: [
        {
          'name': 'Bitcoin',
          'shortname': 'btc',
        },
        {
          'name': 'Ethereum',
          'shortname': 'ETH',
        },
        {
          'name': 'XRP',
          'shortname': 'XRP',
        },
        {
          'name': 'Litecoin',
          'shortname': 'LTC',
        },
        {
          'name': 'Bitcoin Cash',
          'shortname': 'BCH',
        },
        {
          'name': 'EOS',
          'shortname': 'EOS',
        },
        {
          'name': 'Binance Coin',
          'shortname': 'BNB',
        },
        {
          'name': 'Tether',
          'shortname': 'USDT',
        },
        {
          'name': 'Bitcoin SV',
          'shortname': 'BSV',
        },
        {
          'name': 'Cardano',
          'shortname': 'ADA',
        },
        {
          'name': 'TRON',
          'shortname': 'TRX',
        },
        {
          'name': 'Stellar',
          'shortname': 'XLM',
        },
        {
          'name': 'Monero',
          'shortname': 'XMR',
        },
        {
          'name': 'Dash',
          'shortname': 'DASH',
        },
        {
          'name': 'Cosmos',
          'shortname': 'ATOM',
        },
        {
          'name': 'NEO',
          'shortname': 'NEO',
        },
        {
          'name': 'IOTA',
          'shortname': 'MIOTA',
        },
        {
          'name': 'Ethereum Classic',
          'shortname': 'ETC',
        },
        {
          'name': 'NEM',
          'shortname': 'XEM',
        },
        {
          'name': 'Chainlink',
          'shortname': 'LINK',
        },
        {
          'name': 'Ontology',
          'shortname': 'ONT',
        },
        {
          'name': 'Zcash',
          'shortname': 'ZEC',
        },
        {
          'name': 'Tezos',
          'shortname': 'XTZ',
        },
        {
          'name': 'Maker',
          'shortname': 'MKR',
        },
        {
          'name': 'Bitcoin Gold',
          'shortname': 'BTG',
        },
      ],
      columns: [
        '#',
        'Logo',
        'Name',
        'Price (USD)',
        'Volume',
        'Change 1h',
        'Change 24h',
        'Market Cap (USD)',
      ],
    }
  },
  components: {
    Coin,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.headline {
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: normal;
}
</style>
