<template>
  <div>
    <b-jumbotron
      header="User Information"
      lead="Basic information about your accout"
    >
      <h3>
        Name: <u>{{ user.data.displayName }}</u>
      </h3>
      <h3>
        Email: <u>{{ user.data.email }}</u>
      </h3>
    </b-jumbotron>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .jumbotron .display-3 {
    font-size: 40px !important;
  }
}
</style>
