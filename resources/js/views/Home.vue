<template lang="">
  <div class="content">
      <h1 class="title">Shrty</h1>
          <div class="form">
              <vs-input
              class="input"
              v-model="link"
              :state="state"
              label-placeholder="Link"
              icon-after
              @click-icon="copy()"
              @click='button.text = "Short it"'>
                  <template #icon>
                  <i class='bx bx-copy'></i>
                  </template>
              </vs-input>
              <vs-button
                  class="btn"
                  gradient
                  active="false"
                  @click="shortIt"
              >
                  {{button.text}}
              </vs-button>
      </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data: () => ({
    active: 0,
    link: "",
    button: {
      text: "Short it",
    },
    shorted: "",
    state: "primary",
  }),
  methods: {
    shortIt() {
      let api = "/api/link";
      let params = {
        link:this.link
      }
      console.log(params)
      this.axios.post(api, params)
      .then((response) => {
        // if(response.data.error) {
        //   this.state='danger'
        // } else {
          this.state='primary'
          this.shorted = 'http://localhost/'+response.data.short
          this.link=this.shorted
        // }
        console.log(response.data);
      })
      .catch(err => {
        this.state='danger'
        console.log(err.data);
      });
    },
    copy() {
      navigator.clipboard.writeText(this.shorted).then(() => {
        this.button.text = "Copied";
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    },
  },
};
</script>
<style lang="css">
* {
  font-family: "Montserrat", sans-serif;
}

.title {
  display: block;
}
.form {
  display: flex;
  
}
.content {
margin-bottom: 200px;
}
.home {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
}
.btn {
  min-width: 80px;
}
.input {
  min-width: 300px;
}
.input input {
  width: 100%;
}

</style>