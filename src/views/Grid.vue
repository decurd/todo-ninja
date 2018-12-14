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

    <v-container class="my-5">
        <v-card flat class="pa-3">
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <div class="caption grey--text">Project Title</div>
                    <div>Create a new Website</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>The Net Ninja</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due by</div>
                    <div>1st Jan 2019</div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="caption grey--text">Status</div>
                    <div>ongoing</div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
  </div>
</template>