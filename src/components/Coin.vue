<template>
  <tr>
    <th scope="row">{{id}}</th>
    <td><img :src="image"></td>
    <td>{{displayName}}</td>
    <td class="number">{{price}}</td>
    <td class="number">{{volume}}</td>
    <td :class="[
      change.hourly > 0 ? 'up' : 'down',
      'number'
    ]">{{displayChangeHourly}}</td>
    <td :class="[
      change.daily > 0 ? 'up' : 'down',
      'number'
    ]">{{displayChangeDaily}}</td>
    <td class="number">{{market_cap}}</td>
  </tr>
</template>

<script>
export default {
  props: [
    'id',
    'coin_properties',
  ],
  data () {
    return {
      image: `https://static.coincap.io/assets/icons/${this.coin_properties.shortname.toLowerCase()}@2x.png`,
      price: 0,
      volume: 0,
      change: {
        hourly: 0,
        daily: 0,
      },
      market_cap: 0,
    }
  },
  methods: {
    async updateCoinData() {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/${this.coin_properties.name}/`);
      const coinProperties = (await response.json())[0];

      this.price = coinProperties.price_usd;
      this.volume = coinProperties['24h_volume_usd'];
      this.change.hourly = coinProperties.percent_change_1h;
      this.change.daily = coinProperties.percent_change_24h;
      this.market_cap = coinProperties.market_cap_usd;
    }
  },
  async mounted() {
    const update_interval = 5 * 1000;

    await this.updateCoinData();
    setInterval(
      await this.updateCoinData,
      update_interval,
    );
  },
  computed: {
    displayName() {
      return this.coin_properties.name.charAt(0).toUpperCase() + this.coin_properties.name.slice(1);
    },
    displayChangeHourly() {
      return `${this.change.hourly}%`;
    },
    displayChangeDaily() {
      return `${this.change.daily}%`;
    },
  }
}
</script>

<style>
.down {
  color: #ff4040;
}

.up {
  color: #2baa3a;
}

.number {
  font-family:georgia, serif;
  font-size:16px;
  font-weight:bold;
  text-align:center;
}

img {
  width: 35px;
  height: 35px;
}
</style>
