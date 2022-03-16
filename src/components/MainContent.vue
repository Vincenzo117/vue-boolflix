<template>
  <main>
    <div class="container">
      <h1 class="category__title">{{filter ? 'Results' : 'Trending today'}}</h1>
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
    filter() {
      return state.filter;
    }
  },
  created () {
    state.getItems();
  }
};
</script>

<style lang="scss" scoped>
main {
  .container {
    .category__title {
      margin-bottom: 30px;
    }

    .items-wrapper {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      gap: 40px 30px;
    }
  }
}
</style>