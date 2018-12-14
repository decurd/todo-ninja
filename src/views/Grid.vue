<template>
  <div class="grid">
    <h1 class="subheading grey--text">Grid Systems</h1>

    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-btn outline block class="primary">1</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            
        </v-layout>
    </v-container>
  </div>
</template>