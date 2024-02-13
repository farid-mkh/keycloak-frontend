<script setup lang="ts">
import useKeycloak from "./composables/keycloak";
import Keycloak from "keycloak-js";
const realm = "test-realm";
const clientId = "test-client";
const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm,
  clientId,
});
const { loggedIn, login, profile } = useKeycloak(keycloak);
login();
</script>

<template>
  <div style="text-center">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    <div v-if="loggedIn">welcome {{ profile?.fullName }}</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
