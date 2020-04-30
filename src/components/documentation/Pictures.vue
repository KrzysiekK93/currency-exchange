<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.show-pics variant="success"
          >Zrzuty ekranu</b-button
        >
      </b-card-header>
      <b-collapse id="show-pics" visible-false role="tabpanel">
        <b-card-body>
          <b-card-text>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              img-height="480"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide img-src="https://i.ibb.co/x5wfQ4N/ss1.png" />
              <b-carousel-slide img-src="https://i.ibb.co/16bj92F/ss2.png" />
              <b-carousel-slide img-src="https://i.ibb.co/0rZZqsD/ss3.png" />
              <b-carousel-slide img-src="https://i.ibb.co/rGp32tS/ss4.png" />
              <b-carousel-slide img-src="https://i.ibb.co/PW9HX5T/ss5.png" />
              <b-carousel-slide img-src="https://i.ibb.co/whSx32v/ss6.png" />
            </b-carousel>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style>
.carousel-control-next-icon,
.carousel-control-prev-icon {
  position: relative;
  z-index: 2;
  background-image: none;
}

.carousel-control-next-icon::before,
.carousel-control-prev-icon::before {
  content: ">";
  background-color: #28a745;
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  z-index: 0;
  border-radius: 100%;
}

.carousel-control-prev-icon::before {
  content: "<";
}

.carousel-indicators li {
  background-color: #156beb;
}
</style>
