<template>
  <main>
    <div class="container">
      <h1 class="category__title">
        {{ filter ? "Results" : "Trending today" }}
      </h1>
      <div class="items-wrapper">
        <ItemCard 
        v-for="item in getMoviesFound" 
        :key="item.id" 
        :item="item" 
        />
        <ItemCard 
        v-for="item in getSeriesFound" 
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
    getMoviesFound() {
      return state.moviesFound;
    },
    getSeriesFound() {
      return state.seriesFound;
    },
    filter() {
      return state.filter;
    },
  },
  created() {
    state.getItems();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

main {
  .container {
    .category__title {
      margin-bottom: 30px;
    }

    .items-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px 30px;

      .category__subtitle {
        width: 100%;
        text-align: center;
        color: $primary_color;
        font-size: 32px;
        margin-top: 50px;
      }
    }
  }
}
</style>