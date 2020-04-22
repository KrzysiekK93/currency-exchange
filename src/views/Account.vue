<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <UserInfo />
        <AccountOperation />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from "@/components/UserInfo.vue";
import AccountOperation from "@/components/AccountOperation.vue";

export default {
  name: "Account",
  components: {
    UserInfo,
    AccountOperation
  }
};
</script>
