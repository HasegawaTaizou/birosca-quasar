<template>
  <q-page>
    <h1>Comidas</h1>
    <q-list class="foods__options" tag="ul">
      <q-item
        :class="{ active: activeOption === 'option1' }"
        class="option-container"
        tag="li"
        clickable
        @click="activeOption = 'option1'"
      >
        <img
          class="option__image"
          :src="
            activeOption === 'option1'
              ? '../../assets/img/acai-black-icon.png'
              : '../../assets/img/acai-white-icon.png'
          "
          alt="Acai Icon"
        />
        <span class="option__text">Açaís</span>
      </q-item>
      <q-item
        :class="{ active: activeOption === 'option2' }"
        class="option-container"
        tag="li"
        clickable
        @click="activeOption = 'option2'"
      >
        <img
          class="option__image"
          :src="'../../assets/img/acai-black-icon.png'"
          alt="Acai Icon"
        />
        <span class="option__text">Açaís</span>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[64, 38]">
      <q-btn
        type="button"
        @click="addFood"
        fab
        icon="fa-solid fa-plus"
        class="add-food__button"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Foods",
  data() {
    return {
      activeOption: "",
    };
  },
  methods: {
    addFood() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/foods/foodsStyle.css");
</style>
