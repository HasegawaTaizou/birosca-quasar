<template>
  <q-layout view="lhh Lpr lff">
    <q-drawer
      class="sidebar"
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :breakpoint="500"
      elevated
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list tag="ul">
          <q-item tag="li" to="/dashboard/foods">
            <q-item-section avatar>
              <q-icon name="fas fa-ambulance" />
            </q-item-section>
            <q-item-section> Inbox </q-item-section>
          </q-item>
          <q-item tag="li" to="/dashboard/orders">
            <q-item-section avatar>
              <q-icon name="fas fa-ambulance" />
            </q-item-section>
            <q-item-section> Inbox </q-item-section>
          </q-item>
          <q-item tag="li" to="/products">
            <q-item-section avatar>
              <q-icon name="fas fa-ambulance" />
            </q-item-section>
            <q-item-section> Inbox </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",
  components: {},
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(false),
    };
  },
};
</script>

<style scoped>
@import url("../../css/dashboard/dashboardStyle.css");
</style>
