<template>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">Cantor</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" v-if="user.loggedIn" to="/dashboard"
          >Dashobard</router-link
        >
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto nav-fn">
        <template v-if="user.loggedIn" right>
          <div class="nav-item user-name">{{ user.data.displayName }}</div>
          <a class="nav-link" @click.prevent="signOut">Sign out</a>
        </template>
        <template v-else>
          <router-link to="login" class="nav-link">Login</router-link>
          <router-link to="register" class="nav-link">Register</router-link>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style lang="scss">
.navbar {
  margin-bottom: 24px;
  .navbar-brand {
    cursor: default;
  }
  .nav-link {
    cursor: pointer;
  }
  .navbar-nav {
    .user-name {
      padding: 8px;
      font-weight: 600;
      color: white;
    }
  }
}

@media only screen and (max-width: 991px) {
  .navbar-nav.nav-fn {
    flex-direction: row;
    justify-content: space-between;
    .nav-link {
      margin-right: 12px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
