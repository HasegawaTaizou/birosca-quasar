<template>
  <q-layout view="lhh Lpr lff">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :breakpoint="500"
      elevated
      :class="$style.sidebar"
    >
      <span :class="$style.title">Birosca do Açaí</span>
      <q-list tag="ul" class="navigation">
        <q-item
          tag="li"
          :class="$style.navigation__item"
          to="/dashboard/foods"
          :active-class="$style.active"
        >
          <q-item-section class="item__icon-container" avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section :class="$style.item__name"> Comidas </q-item-section>
        </q-item>
        <q-item tag="li" to="/dashboard/orders" :active-class="$style.active">
          <q-item-section avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section> Pedidos </q-item-section>
        </q-item>
        <q-item tag="li" to="/dashboard/history">
          <q-item-section avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section> Histórico </q-item-section>
        </q-item>
        <q-item tag="li" to="/dashboard/settings">
          <q-item-section avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section> Configurações </q-item-section>
        </q-item>
      </q-list>
      <q-item class="log-out" clickable>
        <q-item-section avatar>
          <q-icon name="fas fa-ambulance" />
        </q-item-section>
        <q-item-section> Sair </q-item-section>
      </q-item>
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

<style>
@import url("../../assets/css/dashboard/dashboardStyle.css");
</style>

<style module>
@import url("../../assets/css/dashboard/sidebarStyle.css");
</style>
