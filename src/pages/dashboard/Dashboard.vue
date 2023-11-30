<template>
  <q-layout>
    <q-drawer
      class="sidebar"
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :breakpoint="500"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list tag="ul">
          <q-item tag="li" to="/products">
            <q-item-section avatar>
              <q-icon name="fas fa-ambulance" />
            </q-item-section>
            <q-item-section> Inbox </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
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

<style scoped></style>
