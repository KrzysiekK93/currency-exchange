<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.show-goals variant="success">Cechy i cele</b-button>
      </b-card-header>
      <b-collapse id="show-goals" visible role="tabpanel">
        <b-card-body>
          <b-card-text>
            <ul class="list-group">
              <li class="list-group-item">Wyświetlanie aktualnych kursów walut względem Euro</li>
              <li class="list-group-item">Wyświetlanie historycznych kursów walut przy 4 różnych kombinacjach</li>
              <li class="list-group-item">Możliwość przewalutowania Euro na kursy przedstawione na stronie Home</li>
              <li class="list-group-item">Zapisywanie wartości portfela</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>