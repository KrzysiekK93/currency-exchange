<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Topic />
        <Goals />
        <Pictures />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Topic from "@/components/documentation/Topic.vue";
import Goals from "@/components/documentation/Goals.vue";
import Pictures from "@/components/documentation/Pictures.vue";

export default {
  name: "Documentation",
  components: {
    Topic,
    Goals,
    Pictures
  }
};
</script>
