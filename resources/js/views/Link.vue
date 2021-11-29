<template lang="">
  <div class="content center">
    <h1 class="title">{{this.link}}</h1>
    <router-link :to="{ name: 'home' }" class="link"><vs-button
        flat
        :active="active == 1"
        @click="active = 1"
      >
        Home
      </vs-button></router-link>
  </div>
</template>
<script>
export default {
  name: "link",
  data: () => ({
    link: "",
  }),
  methods: {
  },
  mounted() {
    let api = "/api/link/"+this.$route.params.short;
    this.axios.get(api)
      .then((response) => {
        this.link = response.data.full
        console.log(response.data);
      });
  },
};
</script>
<style lang="css" scope>
.center {
  align-items: center;
}
.link {
  margin-top: 2rem;
  text-decoration: none;
}
</style>