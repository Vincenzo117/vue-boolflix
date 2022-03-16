<template>
  <main>
    <div class="container">
      <div class="items-wrapper">
        <ItemCard
          v-for="item in searchedItems"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import state from "../store.js";

export default {
  name: "MainContent",
  components: {
    ItemCard,
  },
  computed: {
    searchedItems() {
      return state.searchedItems;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  .container {
    .items-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px 2%;
    }
  }
}
</style>