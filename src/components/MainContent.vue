<template>
  <main>
    <div class="container">
      <div class="items-wrapper">
        <ItemCard v-for="(item, i) in filteredItems" :key="i" />
      </div>
    </div>
  </main>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import state from "../store.js";
import axios from "axios";

export default {
  name: "MainContent",
  components: {
    ItemCard,
  },
  data() {
    return {
      baseUrl: "https://api.themoviedb.org/3",
      items: [],
    };
  },
  computed: {
    filteredItems() {
      if (state.filter == "") {
       this.items = [];
      } else {
        axios
          .get(`${this.baseUrl}/search/movie`, {
            params: {
              api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
              query: state.filter,
            },
          })
          .then((res) => {
            this.items = res.data.results;
            console.log(this.items);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
        return this.items;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  .contaniner {
    .items-wrapper {
      display: flex;
    }
  }
}
</style>