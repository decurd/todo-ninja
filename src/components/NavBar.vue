<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="success">
      <v-list>

        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          { icon: 'dashboard', text: 'Text/Button', route: '/'},
          { icon: 'class', text: 'Slot', route: '/slot'},
          { icon: 'aspect_ratio', text: 'Padding&Margin', route: '/paddingnmargin'},
          { icon: 'subject', text: 'Grid/Dummy Data', route: '/grid'},
          { icon: 'subject', text: 'Chips', route: '/chips'},
          { icon: 'subject', text: 'Sorting/Tooltip', route: '/sorting'}
        ]
      }
    }
  }
</script>