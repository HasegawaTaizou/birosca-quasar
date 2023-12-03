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
      <span :class="[$style.title, miniState ? 'invisible' : '']"
        >Birosca do Açaí</span
      >
      <q-list tag="ul" :class="$style.navigation">
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
        <q-item
          tag="li"
          :class="$style.navigation__item"
          to="/dashboard/orders"
          :active-class="$style.active"
        >
          <q-item-section class="item__icon-container" avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section :class="$style.item__name"> Pedidos </q-item-section>
        </q-item>
        <q-item
          tag="li"
          :class="$style.navigation__item"
          to="/dashboard/history"
          :active-class="$style.active"
        >
          <q-item-section class="item__icon-container" avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section :class="$style.item__name">
            Histórico
          </q-item-section>
        </q-item>
        <q-item
          tag="li"
          :class="$style.navigation__item"
          to="/dashboard/settings"
          :active-class="$style.active"
        >
          <q-item-section class="item__icon-container" avatar>
            <q-icon name="fas fa-ambulance" />
          </q-item-section>
          <q-item-section :class="$style.item__name">
            Configurações
          </q-item-section>
        </q-item>
      </q-list>
      <q-item :class="$style.logOut" clickable>
        <q-item-section avatar>
          <q-icon name="fas fa-ambulance" />
        </q-item-section>
        <q-item-section :class="$style.logOut__text"> Sair </q-item-section>
      </q-item>
      <q-page-sticky position="top-right" :offset="[-15, 10]">
        <q-btn
          type="button"
          @click="miniState = !miniState"
          fab
          :icon="
            miniState ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'
          "
          :class="$style.manipulateMenu"
        />
      </q-page-sticky>
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
