<template>
  <div class="about">
    <UserInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "About",
  components: {
    UserInfo
  }
};
</script>
