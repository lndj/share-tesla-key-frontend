<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2"
        :href="link.link"
        target="_blank"
      >
        {{ link.name }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ShareTeslaKey</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {'name': 'Blog', 'link': 'https://blog.ning.dev'},
        {'name': 'Github', 'link': 'https://github.com/lndj/share-tesla-key-frontend'}
      ],
    }),
  }
</script>
