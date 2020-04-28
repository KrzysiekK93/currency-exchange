<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.show-pics variant="success">Zrzuty ekranu</b-button>
      </b-card-header>
      <b-collapse id="show-pics" visible role="tabpanel">
        <b-card-body>
          <b-card-text>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd">
              <!-- Text slides with image -->
              <b-carousel-slide img-src="https://i.ibb.co/QD6yd1Y/ss1.png"/>
              <b-carousel-slide img-src="https://i.ibb.co/XJjVYV6/ss2.png" />
              <b-carousel-slide img-src="https://i.ibb.co/vH0wWQv/ss3.png" />
              <b-carousel-slide img-src="https://i.ibb.co/R4L54vw/ss4.png" />
              <b-carousel-slide img-src="https://i.ibb.co/sF3sH9d/ss5.png" />
              <b-carousel-slide img-src="https://i.ibb.co/HNMZCbZ/ss6.png" />
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
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>