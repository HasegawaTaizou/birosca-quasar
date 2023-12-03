<template>
  <q-page>
    <h1 class="foods-title">Comidas</h1>
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
              ? `${IMAGE_BASE_URL}/acai-white-icon.png`
              : `${IMAGE_BASE_URL}/acai-black-icon.png`
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
          :src="
            activeOption === 'option2'
              ? `${IMAGE_BASE_URL}/hamburguers-white-icon.png`
              : `${IMAGE_BASE_URL}/hamburguers-black-icon.png`
          "
          alt="Acai Icon"
        />
        <span class="option__text">Hambúrgueres</span>
      </q-item>
      <q-item
        :class="{ active: activeOption === 'option3' }"
        class="option-container"
        tag="li"
        clickable
        @click="activeOption = 'option3'"
      >
        <img
          class="option__image"
          :src="
            activeOption === 'option3'
              ? `${IMAGE_BASE_URL}/drinks-white-icon.png`
              : `${IMAGE_BASE_URL}/drinks-black-icon.png`
          "
          alt="Acai Icon"
        />
        <span class="option__text">Bebidas</span>
      </q-item>
      <q-item
        :class="{ active: activeOption === 'option4' }"
        class="option-container"
        tag="li"
        clickable
        @click="activeOption = 'option4'"
      >
        <img
          class="option__image"
          :src="
            activeOption === 'option4'
              ? `${IMAGE_BASE_URL}/diverses-white-icon.png`
              : `${IMAGE_BASE_URL}/diverses-black-icon.png`
          "
          alt="Acai Icon"
        />
        <span class="option__text">Diversos</span>
      </q-item>
      <q-item
        :class="{ active: activeOption === 'option5' }"
        class="option-container"
        tag="li"
        clickable
        @click="activeOption = 'option5'"
      >
        <img
          class="option__image"
          :src="
            activeOption === 'option5'
              ? `${IMAGE_BASE_URL}/freight-white-icon.png`
              : `${IMAGE_BASE_URL}/freight-black-icon.png`
          "
          alt="Acai Icon"
        />
        <span class="option__text">Frete</span>
      </q-item>
    </q-list>
    <q-list tag="ul" class="foods-container">
      <q-card class="food-container" tag="li">
        <img
          :src="`${IMAGE_BASE_URL}/acai-image.png`"
          alt="Acai Image"
          class="food__image"
        />
        <div class="food__main">
          <span class="food__name">Acaí de Nutella</span>
          <span class="food__price">R$ 19,90</span>
        </div>
        <div class="food__ingredients-container">
          <table class="ingredients__ingredients-table">
            <tbody class="ingredients-body">
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
              </tr>
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <q-btn class="food__button-delete" flat>Excluir</q-btn>
        <q-btn class="food__button-edit" flat>Editar</q-btn>
      </q-card>
      <q-card class="food-container" tag="li">
        <img
          :src="`${IMAGE_BASE_URL}/acai-image.png`"
          alt="Acai Image"
          class="food__image"
        />
        <div class="food__main">
          <span class="food__name">Acaí de Nutella</span>
          <span class="food__price">R$ 19,90</span>
        </div>
        <div class="food__ingredients-container">
          <table class="ingredients__ingredients-table">
            <tbody class="ingredients-body">
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
              </tr>
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Tomate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <q-btn class="food__button-delete" flat>Excluir</q-btn>
        <q-btn class="food__button-edit" flat>Editar</q-btn>
      </q-card>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[64, 38]">
      <q-btn
        type="button"
        @click="addFood"
        fab
        icon="fa-solid fa-plus"
        class="icon-add-food"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Foods",
  setup() {
    return {
      IMAGE_BASE_URL: "http://localhost:9000/src/assets/img",
    };
  },
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
