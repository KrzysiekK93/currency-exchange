<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Topic />
        <Goals />
        <Pictures />
        <Links />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Topic from "@/components/documentation/Topic.vue";
import Goals from "@/components/documentation/Goals.vue";
import Pictures from "@/components/documentation/Pictures.vue";
import Links from "@/components/documentation/Links.vue";

export default {
  name: "Documentation",
  components: {
    Topic,
    Goals,
    Pictures,
    Links
  }
};
</script>
