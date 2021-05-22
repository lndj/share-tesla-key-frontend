<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3" @click="create">
          Welcome to Vuetify
        </h1>
        <router-link to="create">Create key</router-link>
      </v-col>
      <v-col class="mb-4">
        <vue-qr
          text="https://blog.ning.dev"
          :margin="2"
          backgroundColor="red"
          :callback="test"
          qid="testid"
        ></vue-qr>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem - {{ $route.params.code }}
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// https://github.com/Binaryify/vue-qr
import VueQr from "vue-qr";

export default {
  name: "HelloWorld",
  components: { VueQr },
  data: () => ({
    ecosystem: [
      {
        text: "ddd",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
    ],
    whatsNext: [
      {
        text: "哈哈哈",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
    ],
  }),
  methods: {
    test(dataUrl, id) {
      console.log(dataUrl, id);
    },
    create() {},
  },
};
</script>

<style scoped>
.qr {
  align-content: center;
}
</style>
