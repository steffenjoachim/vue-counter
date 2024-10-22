Vue.createApp({
    data() {
      return {
        count: 0,
      };
    },
    computed: {
        backgroundPercentage() {
            if (this.count === 0) return 0;
            if (this.count % 100 === 0) return 100;
            return this.count % 100;
        },
    },
  }).mount("#app");
