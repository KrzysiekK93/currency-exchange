<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.show-links variant="success"
          >Linki do składowych projektu</b-button
        >
      </b-card-header>
      <b-collapse id="show-links" visible-false role="tabpanel">
        <b-card-body>
          <b-card-text>
            <ul class="list-group">
              <li class="list-group-item">
                <b-link href="https://exchangeratesapi.io/"
                  >API aktualnych kursów</b-link
                >
              </li>
              <li class="list-group-item">
                <b-link href="https://apexcharts.com/">APEX Charts</b-link>
              </li>
              <li class="list-group-item">
                <b-link href="https://bootstrap-vue.org/">Bootstrap</b-link>
              </li>
              <li class="list-group-item">
                <b-link href="https://firebase.google.com/">Firebase</b-link>
              </li>

              <li class="list-group-item">
                <b-link href="http://api.nbp.pl/">API NBP</b-link>
              </li>

              <li class="list-group-item">
                <b-link href="https://github.com/axios/axios">Axios</b-link>
              </li>

              <li class="list-group-item">
                <b-link href="https://www.npmjs.com/package/execa">NPM</b-link>
              </li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
