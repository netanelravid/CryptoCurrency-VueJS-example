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
          v-for="(name, index) in initial_coin_names"
          :key="index"
          :id="index + 1"
          :name="name">
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
      initial_coin_names: [
        'bitcoin',
        'ethereum',
        'dash',
        'ripple',
        'litecoin',
        'dogecoin',
        'monero',
        'iota',
        'neo',
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
