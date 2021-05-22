<template>
  <v-app>
    <v-app-bar flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Dark Mode"
        persistent-hint
      ></v-switch>
    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    // HelloWorld,
    // LoginForm,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
