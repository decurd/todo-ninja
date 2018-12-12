<template>
  <div class="dashboard">
    
    <h1>Home</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat culpa facere, ipsam laboriosam inventore commodi libero quae laudantium quisquam esse cupiditate harum tempore, ullam dolor quod asperiores nisi. Consequuntur!</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe delectus odio autem esse placeat nam dolorem, at a, velit accusamus earum qui rerum eos non debitis maiores similique facilis inventore!</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Diplay</h4>
    <p class="headline font-weight-bold text-uppercase">This is a headline</p>
    <p class="caption">This is a caption</p>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn depressed large class="pink white--text">
      <v-icon left large>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab depressed dark class="purple">
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn class="hidden-md-and-down">click me</v-btn>

  </div>
</template>

<script>
  export default {
    
  }
</script>
