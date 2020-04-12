<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">Cantor</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="custom">
        <div id="nav-icon" v-on:click="open = !open" :class="{ open: open }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </b-navbar-toggle>

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
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data: function() {
    return {
      open: false
    };
  },
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
  },
  watch: {
    $route() {
      this.open = false;
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
    &.router-link-exact-active {
      color: white !important;
      text-decoration: underline;
    }
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

.navbar-toggler.custom {
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
}

#nav-icon {
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 50%;
    background: white;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }
    &:nth-child(odd) {
      left: 0;
      border-radius: 9px 0 0 9px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      top: 6px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      top: 18px;
    }

    &:nth-child(5),
    &:nth-child(6) {
      top: 30px;
    }
  }

  &.open span {
    &:nth-child(1),
    &:nth-child(6) {
      transform: rotate(45deg);
    }

    &:nth-child(2),
    &:nth-child(5) {
      transform: rotate(-45deg);
    }

    &:nth-child(1) {
      left: 3px;
      top: 10px;
    }

    &:nth-child(2) {
      left: calc(50% - 3px);
      top: 10px;
    }

    &:nth-child(3) {
      left: -50%;
      opacity: 0;
    }

    &:nth-child(4) {
      left: 100%;
      opacity: 0;
    }

    &:nth-child(5) {
      left: 3px;
      top: 24px;
    }

    &:nth-child(6) {
      left: calc(50% - 3px);
      top: 24px;
    }
  }
}
</style>
