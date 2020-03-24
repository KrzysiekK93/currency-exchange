<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-center">
      <b-col cols="6">
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="input-group-1" label="Login" label-for="login">
            <b-form-input
              id="login"
              v-model="form.login"
              required
              placeholder="Enter login"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        login: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
    }
  }
};
</script>
