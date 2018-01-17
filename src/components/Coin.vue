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
    'name',
  ],
  data () {
    return {
      image: `https://files.coinmarketcap.com/static/img/coins/32x32/${this.name}.png`,
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
    updateCoinData() {
      const fetchCoinsData = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', `https://api.coinmarketcap.com/v1/ticker/${this.name}/`);
        request.onload = () => {
          if (request.status == 200) {
            const coin_data = JSON.parse(request.response)[0];
            resolve(coin_data);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.onerror = () => {
          reject(Error('Error fetching data.'));
        }

        request.send();
      }
    );

    fetchCoinsData
      .then((coin_data) => {
        this.price = coin_data.price_usd;
        this.volume = coin_data['24h_volume_usd'];
        this.change.hourly = coin_data.percent_change_1h;
        this.change.daily = coin_data.percent_change_24h;
        this.market_cap = coin_data.market_cap_usd;
      }).catch((error) => {
        console.log(error);
      })
    },
  },
  mounted() {
    const update_interval = 5 * 1000;

    this.updateCoinData();
    setInterval(
      this.updateCoinData,
      update_interval,
    );
  },
  computed: {
    displayName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
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

<<style>
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
</style>
